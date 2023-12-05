import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  code: number;
  email: string;
  newPassword: string;
}

export const verifyForgotPasswordCodeValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code, email, newPassword } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    code,
    email,
    newPassword,
  });

  mustBe({ value: code, type: 'number' });
  mustBe({ value: email, type: 'string' });
  mustBe({ value: newPassword, type: 'string' });

  next();
};
