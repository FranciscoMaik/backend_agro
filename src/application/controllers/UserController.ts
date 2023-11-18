import { Request, Response } from 'express';

import { AlreadyExistError, NotFoundError } from '@infra/express/errors';

import { ControllerInterface, User } from '@application/types';

import { usersRepository } from '@repositories/index';

import { Crypter } from '@libs/Crypter';

interface StoreRequest {
  email: string;
  name: string;
  cpf: string;
  password: string;
  address: string | null;
  formation: string;
}

class UserControlller implements Omit<ControllerInterface, 'index'> {
  public async show(req: Request, res: Response) {
    const id = req.userId;

    const userExists = await usersRepository.findOne(id);

    if (!userExists) {
      throw new NotFoundError('User not found');
    }

    return res.status(200).json(userExists);
  }

  public async store(req: Request, res: Response) {
    const { email, name, password, cpf, address, formation } =
      req.body as StoreRequest;

    const userEmailExists = await usersRepository.findOne(email);

    if (userEmailExists) {
      throw new AlreadyExistError('This email already exists');
    }

    const userCpfExists = await usersRepository.findByCpf(cpf);

    if (userCpfExists) {
      throw new AlreadyExistError('This cpf already exists');
    }

    const crypter = new Crypter();

    const data: Omit<User, 'id' | 'active' | 'createdAt' | 'updatedAt'> = {
      email,
      name,
      cpf,
      address,
      formation,
      account_type: 'user',
      password: crypter.hash(password),
      code: Math.round(Math.random() * 999999),
    };

    const user: Partial<User> = await usersRepository.create(data);

    delete user.password;

    res.status(201).json({ user });
  }

  public async update(req: Request, res: Response) {
    const user = req.body as User;

    const userExists = await usersRepository.findOne(user.id);

    if (!userExists) {
      throw new NotFoundError('User not found');
    }

    const isEmailChanged = userExists.email !== user.email;
    const isCpfChanged = userExists.cpf !== user.cpf;

    if (isEmailChanged) {
      const userEmailExists = await usersRepository.findByEmail(user.email);

      if (userEmailExists) {
        throw new AlreadyExistError('This email already exists');
      }
    }

    if (isCpfChanged) {
      const userCpfExists = await usersRepository.findByCpf(user.cpf);

      if (userCpfExists) {
        throw new AlreadyExistError('This cpf already exists');
      }
    }

    const updatedUser = await usersRepository.update(user);

    res.status(200).json({ user: updatedUser });
  }

  public async delete(req: Request, res: Response) {
    const id = req.userId;

    await usersRepository.delete(id);

    return res.status(204);
  }
}

export default new UserControlller();
