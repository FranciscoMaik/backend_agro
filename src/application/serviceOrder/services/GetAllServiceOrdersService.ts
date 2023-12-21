import { getFarmerService } from '@application/farmer/services';

import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';

interface ServiceInterface {
  active: boolean;
  farmerId: string;
  familyId: string;
  propertyId: string;
}

class GetAllServiceOrdersService {
  async execute({ active, farmerId, familyId, propertyId }: ServiceInterface) {
    const farmer = await getFarmerService.execute({
      id: farmerId,
      familyId,
      propertyId,
    });

    const serviceOrders = await serviceOrdersRepository.findAll(
      farmer.id,
      active,
    );

    return serviceOrders;
  }
}

export const getAllServiceOrdersService = new GetAllServiceOrdersService();
