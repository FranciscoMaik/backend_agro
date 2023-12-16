import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  uses_irrigation: boolean;
  uses_pesticides: boolean;
  cultivation: string;
  input: string;
  hectares: number;
  work_method: string;
  used_equipament: string;
}

export const updateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    uses_irrigation,
    uses_pesticides,
    cultivation,
    input,
    hectares,
    work_method,
    used_equipament,
  } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    uses_irrigation,
    uses_pesticides,
    cultivation,
    input,
    hectares,
    work_method,
    used_equipament,
  });

  mustBe({ name, type: 'string' });
  mustBe({ uses_irrigation, type: 'boolean' });
  mustBe({ uses_pesticides, type: 'boolean' });
  mustBe({ cultivation, type: 'string' });
  mustBe({ input, type: 'string' });
  mustBe({ hectares, type: 'number' });
  mustBe({ work_method, type: 'string' });
  mustBe({ used_equipament, type: 'string' });

  next();
};
