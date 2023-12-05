import { Request, Response } from 'express';

import { verifyEmailVerificationCodeService } from '@application/auth/services';

interface RequestInterface {
  code: number;
  email: string;
}

class VerifyEmailVerificationCodeController {
  async handle(req: Request, res: Response) {
    const { code, email } = req.body as RequestInterface;

    await verifyEmailVerificationCodeService.execute({ code, email });

    res.status(204).send();
  }
}

export const verifyEmailVerificationCodeController =
  new VerifyEmailVerificationCodeController();
