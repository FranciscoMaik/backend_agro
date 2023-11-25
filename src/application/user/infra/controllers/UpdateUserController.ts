import { Request, Response } from 'express';

import { User } from '@application/commons/types';
import { updateUserService } from '@application/user/services';

export class UpdateUserController {
  public async handle(req: Request, res: Response) {
    const data = req.body as User;

    const user = await updateUserService.execute(data);

    res.status(200).json({ user });
  }
}
