import farmersRepository from '../infra/repositories/FarmersRepository';
import { getFarmerService } from './GetFarmerService';

interface ServiceInterface {
  id: string;
}

class DeleteFarmerService {
  async execute({ id }: ServiceInterface) {
    const farmer = await getFarmerService.execute({ id });
    await farmersRepository.delete(farmer.id);
  }
}

export const deleteFarmerService = new DeleteFarmerService();
