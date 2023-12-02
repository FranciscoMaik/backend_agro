import { Request, Response } from 'express';

import { userMapper } from '@application/@shared/utils';
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

    const user = await updateUserService.execute({
      ...data,
      id,
    });

    res.status(200).json({ user: userMapper(user) });
  }
}

export const updateUserController = new UpdateUserController();
