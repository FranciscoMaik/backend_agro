import { NotFoundError } from '@infra/express/errors';

import { propertiesRepository } from '../infra/repositories/PropertiesRepository';

interface ServiceInterface {
  id: string;
}

class GetPropertyService {
  async execute({ id }: ServiceInterface) {
    const property = await propertiesRepository.findById(id);

    if (!property) {
      throw new NotFoundError('property not found');
    }

    return property;
  }
}

export const getPropertyService = new GetPropertyService();
