import { AlreadyExistError } from '@infra/express/errors';

import { Property } from '@application/@shared/types/entities';
import { Create } from '@application/@shared/types/helpers';

import { propertiesRepository } from '../infra/repositories/PropertiesRepository';

interface ServiceInterface {
  name: string;
  hectares: number;
  address: string;
  exploration: string;
  classification: string;
  hydric_source: string;
  electrical_source: string;
}

class CreatePropertyService {
  async execute({
    name,
    hectares,
    address,
    exploration,
    classification,
    hydric_source,
    electrical_source,
  }: ServiceInterface) {
    const nameExists = await propertiesRepository.findByName(name);

    if (nameExists) {
      throw new AlreadyExistError('name already exists');
    }

    const data: Create<Property> = {
      name,
      hectares,
      address,
      exploration,
      classification,
      hydric_source,
      electrical_source,
    };

    const property = await propertiesRepository.create(data);

    return property;
  }
}

export const createPropertyService = new CreatePropertyService();
