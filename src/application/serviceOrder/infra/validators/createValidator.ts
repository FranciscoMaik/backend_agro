import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
}

export const createValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, address, end_date, start_date } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    address,
    end_date,
    start_date,
  });

  mustBe({ name, type: 'string' });
  mustBe({ address, type: 'string' });
  mustBe({ start_date, type: 'string' });
  mustBe({ end_date, type: 'string' });

  next();
};
