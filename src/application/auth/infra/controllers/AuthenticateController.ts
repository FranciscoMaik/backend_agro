import { Request, Response } from 'express';

import { userMapper } from '@application/@shared/utils';
import { authenticateService } from '@application/auth/services';

interface RequestInterface {
  email: string;
  password: string;
}

class AuthenticateController {
  public async handle(req: Request, res: Response) {
    const { email, password } = req.body as RequestInterface;

    const { user, token } = await authenticateService.execute({
      email,
      password,
    });

    res.status(200).json({ user: userMapper(user), token });
  }
}

export const authenticateController = new AuthenticateController();
