import { Request, Response } from 'express';

import { authenticateService } from '@application/auth/services';
import { User } from '@application/commons/types';

interface RequestInterface {
  email: string;
  password: string;
}

interface ResponseInterface {
  user: Partial<User>;
  token: string;
}

class AuthenticateController {
  public async handle(req: Request, res: Response) {
    const { email, password } = req.body as RequestInterface;

    const { user, token }: ResponseInterface =
      await authenticateService.execute({
        email,
        password,
      });

    delete user.password;

    res.status(200).json({ user, token });
  }
}

export const authenticateController = new AuthenticateController();
