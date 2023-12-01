import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '../../../commons/utils';

interface RequestInterface {
  password: string;
  newPassword: string;
}

export const updatePasswordValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password, newPassword } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    password,
    newPassword,
  });

  mustBe({ password, type: 'string' });
  mustBe({ newPassword, type: 'string' });

  next();
};
