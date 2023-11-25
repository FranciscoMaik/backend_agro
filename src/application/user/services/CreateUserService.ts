import { AlreadyExistError } from '@infra/express/errors';

import { User } from '@application/commons/types';

import { Crypter } from '@libs';

import { usersRepository } from '../infra/repository/UsersRepository';

interface ServiceInterface {
  email: string;
  name: string;
  cpf: string;
  password: string;
  formation: string;
  address?: string | null;
}

export class CreateUserService {
  public async execute({
    email,
    cpf,
    name,
    password,
    formation,
    address,
  }: ServiceInterface) {
    const userEmailExists = await usersRepository.findByEmail(email);

    if (userEmailExists) {
      throw new AlreadyExistError('this email already exists');
    }

    const userCpfExists = await usersRepository.findByCpf(cpf);

    if (userCpfExists) {
      throw new AlreadyExistError('this cpf already exists');
    }

    const crypter = new Crypter();

    const data: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
      email,
      name,
      cpf,
      address,
      formation,
      account_type: 'user',
      active: true,
      password: crypter.hash(password),
      code: Math.round(Math.random() * 999999),
    };

    const user: Partial<User> = await usersRepository.create(data);

    delete user.password;

    return user;
  }
}
