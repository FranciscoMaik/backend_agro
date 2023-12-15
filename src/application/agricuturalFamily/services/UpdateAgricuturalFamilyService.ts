import { AlreadyExistError, BadRequestError } from '@infra/express/errors';

import { AgricuturalFamily } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';
import { getPropertyService } from '@application/property/services';

import agricuturalFamilysRepository from '../infra/repositories/AgricuturalFamilysRepository';
import { getAgricuturalFamilyService } from './GetAgricuturalFamilyService';

interface ServiceInterface {
  id: string;
  name: string;
  members_amount: number;
  propertyId: string;
}

class UpdateAgricuturalFamilyService {
  async execute({ id, name, members_amount, propertyId }: ServiceInterface) {
    if (members_amount <= 0) {
      throw new BadRequestError('members_amount must bee greater then 0');
    }

    const property = await getPropertyService.execute({ id: propertyId });

    const agricuturalFamily = await getAgricuturalFamilyService.execute({
      id,
      propertyId: property.id,
    });

    const isNameChanged = agricuturalFamily.name !== name;

    if (isNameChanged) {
      const nameExists = await agricuturalFamilysRepository.findByName(name);

      if (nameExists) {
        throw new AlreadyExistError('name already exists');
      }
    }

    const data: Update<AgricuturalFamily> = {
      id,
      members_amount,
      name,
      property_id: property.id,
    };

    const updatedAgricuturalFamily =
      await agricuturalFamilysRepository.update(data);

    return updatedAgricuturalFamily;
  }
}

export const updateAgricuturalFamilyService =
  new UpdateAgricuturalFamilyService();
