import { Request, Response } from 'express';

import { softDeleteUserService } from '@application/user/services';

export class SoftDeleteUserController {
  public async handle(req: Request, res: Response) {
    const id = req.userId;

    await softDeleteUserService.execute({ id });

    return res.status(204);
  }
}
