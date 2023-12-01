import { NotFoundError } from '@application/commons/errors';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  id: string;
}

class GetFarmerService {
  async execute({ id }: ServiceInterface) {
    const farmer = await farmersRepository.findById(id);

    if (!farmer) {
      throw new NotFoundError('farmer not found');
    }

    return farmer;
  }
}

export const getFarmerService = new GetFarmerService();
