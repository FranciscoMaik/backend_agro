import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  email: string;
}

export const sendForgotPasswordCodeValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    email,
  });

  mustBe({ value: email, type: 'string' });

  next();
};
