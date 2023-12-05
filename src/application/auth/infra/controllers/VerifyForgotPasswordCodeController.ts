import { Request, Response } from 'express';

import { verifyForgotPasswordCodeService } from '@application/auth/services';

interface RequestInterface {
  code: number;
  email: string;
  newPassword: string;
}

class VerifyForgotPasswordCodeController {
  async handle(req: Request, res: Response) {
    const { email, code, newPassword } = req.body as RequestInterface;

    await verifyForgotPasswordCodeService.execute({ email, code, newPassword });

    res.status(204).send();
  }
}

export const verifyForgotPasswordCodeController =
  new VerifyForgotPasswordCodeController();
