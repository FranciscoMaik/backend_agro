import { Request, Response } from 'express';

import { updatePasswordService } from '@application/user/services';

interface RequestInterface {
  password: string;
  newPassword: string;
}

class UpdatePasswordController {
  async handle(req: Request, res: Response) {
    const { password, newPassword } = req.body as RequestInterface;

    const id = req.userId;

    await updatePasswordService.execute({
      id,
      password,
      newPassword,
    });

    res.status(204).send();
  }
}

export const updatePasswordController = new UpdatePasswordController();
