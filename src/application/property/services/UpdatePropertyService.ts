import { AlreadyExistError } from '@infra/express/errors';

import { Property } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import { propertiesRepository } from '../infra/repositories/PropertiesRepository';
import { getPropertyService } from './GetPropertyService';

interface ServiceInterface {
  id: string;
  name: string;
  hectares: number;
  address: string;
  exploration: string;
  classification: string;
  hydric_source: string;
  electrical_source: string;
}

class UpdatePropertyService {
  async execute({
    id,
    name,
    hectares,
    address,
    exploration,
    classification,
    hydric_source,
    electrical_source,
  }: ServiceInterface) {
    const property = await getPropertyService.execute({ id });

    const isNameChange = property.name !== name;

    if (isNameChange) {
      const nameExists = await propertiesRepository.findByName(name);

      if (nameExists) {
        throw new AlreadyExistError('name already exists');
      }
    }

    const data: Update<Property> = {
      id,
      name,
      hectares,
      address,
      exploration,
      classification,
      hydric_source,
      electrical_source,
    };

    const updatedProperty = await propertiesRepository.update(data);

    return updatedProperty;
  }
}

export const updatePropertyService = new UpdatePropertyService();
