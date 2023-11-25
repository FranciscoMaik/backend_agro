import { Request, Response } from 'express';

import { deleteUserService } from '@application/user/services';

export class DeleteUserController {
  public async handle(req: Request, res: Response) {
    const id = req.userId;

    await deleteUserService.execute({ id });

    return res.status(204);
  }
}
