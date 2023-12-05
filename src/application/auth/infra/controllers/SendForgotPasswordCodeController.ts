import { Request, Response } from 'express';

import { sendForgotPasswordCodeService } from '@application/auth/services';

interface RequestInterface {
  email: string;
}

class SendForgotPasswordCodeController {
  async handle(req: Request, res: Response) {
    const { email } = req.body as RequestInterface;

    await sendForgotPasswordCodeService.execute({ email });

    res.status(201).send();
  }
}

export const sendForgotPasswordCodeController =
  new SendForgotPasswordCodeController();
