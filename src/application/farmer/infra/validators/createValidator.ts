import { Request, Response, NextFunction } from 'express';

import { mustBe, requiredFields } from '@shared/utils';

interface RequestInterface {
  name: string;
  nickname: string;
  gender: string;
  phone: string;
  cpf: string;
  address: string;
  marital_status: string;
  credit_line: string;
  course: string;
}

export const createValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    nickname,
    gender,
    phone,
    cpf,
    address,
    marital_status,
    credit_line,
    course,
  } = req.body as RequestInterface;

  requiredFields<RequestInterface>({
    name,
    nickname,
    gender,
    phone,
    cpf,
    address,
    marital_status,
    credit_line,
    course,
  });

  mustBe({ name, type: 'string' });
  mustBe({ gender, type: 'string' });
  mustBe({ phone, type: 'string' });
  mustBe({ cpf, type: 'string' });
  mustBe({ address, type: 'string' });
  mustBe({ marital_status, type: 'string' });
  mustBe({ credit_line, type: 'string' });
  mustBe({ course, type: 'string' });

  next();
};
