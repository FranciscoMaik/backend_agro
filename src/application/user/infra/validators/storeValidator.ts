import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '../../../commons/utils';

interface StoreValidator {
  email: string;
  name: string;
  cpf: string;
  password: string;
  formation: string;
  address?: string | null;
}

export const storeValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, name, password, cpf, formation, address } =
    req.body as StoreValidator;

  requiredFields<StoreValidator>({
    email,
    name,
    password,
    cpf,
    formation,
  });

  mustBe({ email, type: 'string' });
  mustBe({ password, type: 'string' });
  mustBe({ cpf, type: 'string' });
  mustBe({ formation, type: 'string' });

  if (address) {
    mustBe({ address, type: 'string' });
  }

  next();
};