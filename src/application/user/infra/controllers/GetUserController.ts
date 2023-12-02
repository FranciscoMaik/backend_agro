import { Request, Response } from 'express';

import { userMapper } from '@application/@shared/utils';
import { getUserService } from '@application/user/services';

class GetUserController {
  public async handle(req: Request, res: Response) {
    const id = req.userId;

    const user = await getUserService.execute({ id });

    return res.status(200).json({ user: userMapper(user) });
  }
}

export const getUserController = new GetUserController();
