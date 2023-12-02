import { BadRequestError } from '@shared/errors';

export const requiredFields = <T extends object>(fields: T) => {
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      throw new BadRequestError(`${key} is required`);
    }
  });
};