import farmersRepository from '../infra/repositories/FarmersRepository';
import { getFarmerService } from './GetFarmerService';

interface ServiceInterface {
  id: string;
  propertyId: string;
  familyId: string;
}

class DeleteFarmerService {
  async execute({ id, propertyId, familyId }: ServiceInterface) {
    const farmer = await getFarmerService.execute({ id, propertyId, familyId });

    await farmersRepository.delete(farmer.id, farmer.family_id);
  }
}

export const deleteFarmerService = new DeleteFarmerService();
