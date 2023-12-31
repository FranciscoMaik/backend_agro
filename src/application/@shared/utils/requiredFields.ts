import { isEmpty } from '@utils/validators';

import { BadRequestError } from '@shared/errors';

export const requiredFields = <T extends object>(fields: T) => {
  Object.entries(fields).forEach(([key, value]) => {
    if (isEmpty(value) || typeof value === 'undefined') {
      throw new BadRequestError(`${key} is required`);
    }
  });
};
