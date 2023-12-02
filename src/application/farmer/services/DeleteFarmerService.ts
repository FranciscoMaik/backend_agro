import { NotFoundError } from '@shared/errors';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  id: string;
}

class DeleteFarmerService {
  async execute({ id }: ServiceInterface) {
    const farmer = await farmersRepository.findById(id);

    if (!farmer) {
      throw new NotFoundError('farmer not found');
    }

    await farmersRepository.delete(id);
  }
}

export const deleteFarmerService = new DeleteFarmerService();
