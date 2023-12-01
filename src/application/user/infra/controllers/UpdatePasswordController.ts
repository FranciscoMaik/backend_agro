import { Request, Response } from 'express';

import { User } from '@application/commons/types';
import { updatePasswordService } from '@application/user/services';

interface RequestInterface {
  password: string;
  newPassword: string;
}

class UpdatePasswordController {
  async handle(req: Request, res: Response) {
    const { password, newPassword } = req.body as RequestInterface;

    const id = req.userId;

    const user: Partial<User> = await updatePasswordService.execute({
      id,
      password,
      newPassword,
    });

    delete user.password;

    res.status(200).json({ user });
  }
}

export const updatePasswordController = new UpdatePasswordController();
