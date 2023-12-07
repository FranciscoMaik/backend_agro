import farmersRepository from '../infra/repositories/FarmersRepository';
import { getFarmerService } from './GetFarmerService';

interface ServiceInterface {
  id: string;
}

class SoftDeleteFarmerService {
  async execute({ id }: ServiceInterface) {
    const farmer = await getFarmerService.execute({ id });

    await farmersRepository.update({ ...farmer, active: false });
  }
}

export const softDeleteFarmerService = new SoftDeleteFarmerService();
