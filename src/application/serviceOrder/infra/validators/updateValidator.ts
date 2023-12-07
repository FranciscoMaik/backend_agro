import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
  active: boolean;
}

export const updateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, address, end_date, start_date, active } =
    req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    address,
    end_date,
    start_date,
    active,
  });

  mustBe({ name, type: 'string' });
  mustBe({ address, type: 'string' });
  mustBe({ start_date, type: 'string' });
  mustBe({ end_date, type: 'string' });
  mustBe({ active, type: 'boolean' });

  next();
};
