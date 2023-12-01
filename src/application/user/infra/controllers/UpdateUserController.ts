import { Request, Response } from 'express';

import { User } from '@application/commons/types';
import { updateUserService } from '@application/user/services';

interface RequestInterface {
  name: string;
  email: string;
  password: string;
  cpf: string;
  address?: string | null;
  formation: string;
}

class UpdateUserController {
  public async handle(req: Request, res: Response) {
    const data = req.body as RequestInterface;
    const id = req.userId;

    const user: Partial<User> = await updateUserService.execute({
      ...data,
      id,
    });

    delete user.password;

    res.status(200).json({ user });
  }
}

export const updateUserController = new UpdateUserController();
