import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

export interface RequestInterface {
  email: string;
  password: string;
}

export const authenticateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    email,
    password,
  });

  mustBe({ value: email, type: 'string' });
  mustBe({ value: password, type: 'string' });

  next();
};
