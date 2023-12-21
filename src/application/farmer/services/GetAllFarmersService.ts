import { getAgricuturalFamilyService } from '@application/agricuturalFamily/services';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  propertyId: string;
  familyId: string;
}

class GetAllFarmersService {
  async execute({ propertyId, familyId }: ServiceInterface) {
    const agricuturalFamily = await getAgricuturalFamilyService.execute({
      id: familyId,
      propertyId,
    });

    const farmers = await farmersRepository.findAll(agricuturalFamily.id);
    return farmers;
  }
}

export const getAllFarmersService = new GetAllFarmersService();
