import { Request, Response } from 'express';

import { emailVerificationService } from '@application/auth/services';

interface RequestInterface {
  code: number;
}

class EmailVerificationController {
  async handle(req: Request, res: Response) {
    const { code } = req.body as RequestInterface;
    const userId = req.userId;

    await emailVerificationService.execute({ code, userId });

    res.status(204).send();
  }
}

export const emailVerificationController = new EmailVerificationController();
