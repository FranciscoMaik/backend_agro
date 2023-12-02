import { Request, Response } from 'express';

interface RequestInterface {
  email: string;
}

class ForgotPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body as RequestInterface;
  }
}
