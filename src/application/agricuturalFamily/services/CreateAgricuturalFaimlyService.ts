import { AlreadyExistError, BadRequestError } from '@infra/express/errors';

import { AgricuturalFamily } from '@application/@shared/types/entities';
import { Create } from '@application/@shared/types/helpers';
import { getPropertyService } from '@application/property/services';

import agricuturalFamilysRepository from '../infra/repositories/AgricuturalFamilysRepository';

interface ServiceInterface {
  name: string;
  members_amount: number;
  propertyId: string;
}

class CreateAgricuturalFamilyService {
  async execute({ name, members_amount, propertyId }: ServiceInterface) {
    if (members_amount <= 0) {
      throw new BadRequestError('members_amount must bee greater then 0');
    }

    const property = await getPropertyService.execute({ id: propertyId });

    const nameExists = await agricuturalFamilysRepository.findByName(name);

    if (nameExists) {
      throw new AlreadyExistError('name already exists');
    }

    const data: Create<AgricuturalFamily> = {
      members_amount,
      name,
      property_id: property.id,
    };

    const agricuturalFamily = await agricuturalFamilysRepository.create(data);

    return agricuturalFamily;
  }
}

export const createAgricuturalFamilyService =
  new CreateAgricuturalFamilyService();
