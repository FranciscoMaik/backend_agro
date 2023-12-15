import { NotFoundError } from '@infra/express/errors';

import { getPropertyService } from '@application/property/services';

import agricuturalFamilysRepository from '../infra/repositories/AgricuturalFamilysRepository';

interface ServiceInterface {
  id: string;
  propertyId: string;
}

class GetAgricuturalFamilyService {
  async execute({ id, propertyId }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const agricuturalFamily = await agricuturalFamilysRepository.findById(
      id,
      property.id,
    );

    if (!agricuturalFamily) {
      throw new NotFoundError('agricutural family not found');
    }

    return agricuturalFamily;
  }
}

export const getAgricuturalFamilyService = new GetAgricuturalFamilyService();
