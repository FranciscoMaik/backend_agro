import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  code: number;
}

export const emailVerificationValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    code,
  });

  mustBe({ value: code, type: 'number' });

  next();
};
