import { getAgricuturalFamilyService } from '@application/agricuturalFamily/services';

import { NotFoundError } from '@shared/errors';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  id: string;
  propertyId: string;
  familyId: string;
}

class GetFarmerService {
  async execute({ id, propertyId, familyId }: ServiceInterface) {
    const agricuturalFamily = await getAgricuturalFamilyService.execute({
      id: familyId,
      propertyId,
    });

    const farmer = await farmersRepository.findById(id, agricuturalFamily.id);

    if (!farmer) {
      throw new NotFoundError('farmer not found');
    }

    return farmer;
  }
}

export const getFarmerService = new GetFarmerService();
