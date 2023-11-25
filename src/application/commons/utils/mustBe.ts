import { BadRequestError } from '@application/commons/errors';

type Type = 'string' | 'number' | 'object';

interface Field {
  [key: string]: unknown;
  type: Type;
}

export const mustBe = ({ type, ...rest }: Field) => {
  const [[key, value]] = Object.entries(rest);

  if (typeof value !== type) {
    throw new BadRequestError(`${key} must be ${type}`);
  }
};
