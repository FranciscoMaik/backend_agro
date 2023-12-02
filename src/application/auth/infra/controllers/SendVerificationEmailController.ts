import { Request, Response } from 'express';

import { sendVerificationEmailService } from '@application/auth/services';

interface RequestInterface {
  email: string;
}

class SendVerificationEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.body as RequestInterface;

    await sendVerificationEmailService.execute({ email });

    res.status(201).send();
  }
}

export const sendVerificationEmailController =
  new SendVerificationEmailController();
