import { NotFoundError } from '@application/commons/errors';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  id: string;
}

class SoftDeleteFarmerService {
  async execute({ id }: ServiceInterface) {
    const farmer = await farmersRepository.findById(id);

    if (!farmer) {
      throw new NotFoundError('farmer not found');
    }

    await farmersRepository.update({ ...farmer, active: false });
  }
}

export const softDeleteFarmerService = new SoftDeleteFarmerService();
