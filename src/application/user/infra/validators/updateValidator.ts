import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  email: string;
  name: string;
  cpf: string;
  formation: string;
  address?: string | null;
}

export const updateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, name, cpf, formation, address } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    email,
    name,
    cpf,
    formation,
  });

  mustBe({ email, type: 'string' });
  mustBe({ name, type: 'string' });
  mustBe({ cpf, type: 'string' });
  mustBe({ formation, type: 'string' });

  if (address) {
    mustBe({ address, type: 'string' });
  }

  next();
};
