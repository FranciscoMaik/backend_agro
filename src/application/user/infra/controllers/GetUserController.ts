import { Request, Response } from 'express';

import { User } from '@application/commons/types';
import { getUserService } from '@application/user/services';

class GetUserController {
  public async handle(req: Request, res: Response) {
    const id = req.userId;

    const user: Partial<User> = await getUserService.execute({ id });

    delete user.password;

    return res.status(200).json({ user });
  }
}

export const getUserController = new GetUserController();
