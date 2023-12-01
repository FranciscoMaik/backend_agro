import { Request, Response } from 'express';

import { User } from '@application/commons/types';
import { createUserService } from '@application/user/services';

interface RequestInterface {
  email: string;
  name: string;
  cpf: string;
  password: string;
  formation: string;
  address?: string | null;
}

class CreateUserController {
  public async handle(req: Request, res: Response) {
    const data = req.body as RequestInterface;

    const user: Partial<User> = await createUserService.execute(data);

    delete user.password;

    res.status(201).json({ user });
  }
}

export const createUserController = new CreateUserController();
