import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '../../../commons/utils';

export interface AuthenticateRequest {
  email: string;
  password: string;
}

export const authenticateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body as AuthenticateRequest;

  requiredFields<AuthenticateRequest>({
    email,
    password,
  });

  mustBe({
    value: email,
    key: 'email',
    type: 'string',
  });
  mustBe({
    value: password,
    key: 'password',
    type: 'string',
  });

  next();
};
