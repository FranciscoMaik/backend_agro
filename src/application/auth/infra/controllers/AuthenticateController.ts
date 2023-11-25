import { Request, Response } from 'express';

import { authenticateService } from '@application/auth/services';

interface RequestInterface {
  email: string;
  password: string;
}

export class AuthenticateController {
  public async handle(req: Request, res: Response) {
    const { email, password } = req.body as RequestInterface;

    const { user, token } = await authenticateService.execute({
      email,
      password,
    });

    res.status(200).json({ user, token });
  }
}
