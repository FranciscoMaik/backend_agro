import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';
import { getServiceOrderService } from './GetServiceOrderService';

interface ServiceInterface {
  id: string;
  farmerId: string;
  familyId: string;
  propertyId: string;
}

class DeleteServiceOrderService {
  async execute({ id, farmerId, familyId, propertyId }: ServiceInterface) {
    const serviceOrder = await getServiceOrderService.execute({
      id,
      farmerId,
      familyId,
      propertyId,
    });

    serviceOrdersRepository.delete(serviceOrder.id, serviceOrder.farmer_id);
  }
}

export const deleteServiceOrderService = new DeleteServiceOrderService();
