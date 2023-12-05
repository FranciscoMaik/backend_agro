import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  code: number;
  email: string;
}

export const verifyEmailVerificationCodeValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code, email } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    code,
    email,
  });

  mustBe({ value: code, type: 'number' });
  mustBe({ value: email, type: 'string' });

  next();
};
