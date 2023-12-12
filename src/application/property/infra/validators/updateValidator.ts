import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  hectares: number;
  address: string;
  exploration: string;
  classification: string;
  hydric_source: string;
  electrical_source: string;
}

export const updateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    hectares,
    address,
    exploration,
    classification,
    hydric_source,
    electrical_source,
  } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    hectares,
    address,
    exploration,
    classification,
    hydric_source,
    electrical_source,
  });

  mustBe({ name, type: 'string' });
  mustBe({ hectares, type: 'number' });
  mustBe({ address, type: 'string' });
  mustBe({ exploration, type: 'string' });
  mustBe({ classification, type: 'string' });
  mustBe({ hydric_source, type: 'string' });
  mustBe({ electrical_source, type: 'string' });

  next();
};
