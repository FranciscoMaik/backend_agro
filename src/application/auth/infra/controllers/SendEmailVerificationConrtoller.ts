import { Request, Response } from 'express';

import { sendEmailVerificationCodeService } from '@application/auth/services';

interface RequestInterface {
  email: string;
}

class SendEmailVerificationCodeController {
  async handle(req: Request, res: Response) {
    const { email } = req.body as RequestInterface;

    await sendEmailVerificationCodeService.execute({ email });

    res.status(201).send();
  }
}

export const sendEmailVerificationCodeController =
  new SendEmailVerificationCodeController();
