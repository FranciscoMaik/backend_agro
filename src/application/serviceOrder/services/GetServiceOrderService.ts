import { NotFoundError } from '@infra/express/errors';

import { getFarmerService } from '@application/farmer/services';

import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';

interface ServiceInterface {
  id: string;
  farmerId: string;
}

class GetServiceOrderService {
  async execute({ id, farmerId }: ServiceInterface) {
    const farmer = await getFarmerService.execute({ id: farmerId });

    const serviceOrder = await serviceOrdersRepository.findById(id, farmer.id);

    if (!serviceOrder) {
      throw new NotFoundError('service order not found');
    }

    return serviceOrder;
  }
}

export const getServiceOrderService = new GetServiceOrderService();
