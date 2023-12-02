import { Request, Response } from 'express';

import { userMapper } from '@application/@shared/utils';
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

    const user = await createUserService.execute(data);

    res.status(201).json({ user: userMapper(user) });
  }
}

export const createUserController = new CreateUserController();
