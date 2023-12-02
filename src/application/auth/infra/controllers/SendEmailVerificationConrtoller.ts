import { Request, Response } from 'express';

import { sendEmailVerificationService } from '@application/auth/services';

interface RequestInterface {
  email: string;
}

class SendEmailVerificationController {
  async handle(req: Request, res: Response) {
    const { email } = req.body as RequestInterface;

    await sendEmailVerificationService.execute({ email });

    res.status(201).send();
  }
}

export const sendEmailVerificationController =
  new SendEmailVerificationController();
