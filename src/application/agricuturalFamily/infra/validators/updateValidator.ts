import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  members_amount: number;
}

export const updateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, members_amount } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    members_amount,
  });

  mustBe({ name, type: 'string' });
  mustBe({ members_amount, type: 'number' });

  next();
};
