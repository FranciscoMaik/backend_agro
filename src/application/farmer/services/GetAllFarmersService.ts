import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  userId: string;
}

class GetAllFarmersService {
  async execute({ userId }: ServiceInterface) {
    const farmers = await farmersRepository.findAll(userId);
    return farmers;
  }
}

export const getAllFarmersService = new GetAllFarmersService();
