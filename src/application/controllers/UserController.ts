import { Request, Response } from 'express';

import { ControllerInterface } from '@application/types';

import { usersRepository } from '@repositories/index';

class UserControlller implements Omit<ControllerInterface, 'index'> {
  public async show(req: Request, res: Response) {
    const id = req.userId;

    const userExists = await usersRepository.findOne(id);

    if (!userExists) {
      throw new Error('aa');
    }

    return res.status(200).json(userExists);
  }

  public async store(req: Request, res: Response) {
    const { email, name, password } = req.body;
    // verificar se o name deve ser unico
  }

  public async update(req: Request, res: Response) {}

  public async delete(req: Request, res: Response) {
    const id = req.userId;

    await usersRepository.delete(id);

    return res.status(201);
  }
}

export default new UserControlller();
