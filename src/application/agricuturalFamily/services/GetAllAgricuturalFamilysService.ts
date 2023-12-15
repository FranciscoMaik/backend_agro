import { getPropertyService } from '@application/property/services';

import agricuturalFamilysRepository from '../infra/repositories/AgricuturalFamilysRepository';

interface ServiceInterface {
  propertyId: string;
}

class GetAllAgricuturalFamilysService {
  async execute({ propertyId }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const agricuturalFamilys = await agricuturalFamilysRepository.findAll(
      property.id,
    );

    return agricuturalFamilys;
  }
}

export const getAllAgricuturalFamilysService =
  new GetAllAgricuturalFamilysService();
