import { getFarmerService } from '@application/farmer/services';

import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';

interface ServiceInterface {
  farmerId: string;
  active: boolean;
}

class GetAllServiceOrdersService {
  async execute({ farmerId, active }: ServiceInterface) {
    const farmer = await getFarmerService.execute({ id: farmerId });

    const serviceOrders = await serviceOrdersRepository.findAll(
      farmer.id,
      active,
    );

    return serviceOrders;
  }
}

export const getAllServiceOrdersService = new GetAllServiceOrdersService();
