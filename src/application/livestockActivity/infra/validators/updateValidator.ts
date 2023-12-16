import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  females_amount: number;
  males_amount: number;
  breed: string;
  size: string;
  production_system: string;
  power_supply: string;
  goal: string;
  hectares: number;
}

export const updateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    females_amount,
    males_amount,
    breed,
    size,
    production_system,
    power_supply,
    goal,
    hectares,
  } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    females_amount,
    males_amount,
    breed,
    size,
    production_system,
    power_supply,
    goal,
    hectares,
  });

  mustBe({ name, type: 'string' });
  mustBe({ females_amount, type: 'number' });
  mustBe({ males_amount, type: 'number' });
  mustBe({ breed, type: 'string' });
  mustBe({ size, type: 'string' });
  mustBe({ production_system, type: 'string' });
  mustBe({ power_supply, type: 'string' });
  mustBe({ goal, type: 'string' });
  mustBe({ hectares, type: 'number' });

  next();
};
