import { Request, Response } from 'express';

import { getUserService } from '@application/user/services';

export class GetUserController {
  public async handle(req: Request, res: Response) {
    const id = req.userId;

    const user = await getUserService.execute({ id });

    return res.status(200).json(user);
  }
}
