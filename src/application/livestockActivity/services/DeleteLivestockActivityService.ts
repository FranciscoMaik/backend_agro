import livestockActivitiesRepository from '../infra/repositories/LivestockActivitiesRepository';
import { getLivestockActivityService } from './GetLivestockActivityService';

interface ServiceInterface {
  id: string;
  propertyId: string;
}

class DeleteLivestockActivityService {
  async execute({ id, propertyId }: ServiceInterface) {
    const livestockActivity = await getLivestockActivityService.execute({
      id,
      propertyId,
    });

    await livestockActivitiesRepository.delete(
      livestockActivity.id,
      livestockActivity.property_id,
    );
  }
}

export const deleteLivestockActivityService =
  new DeleteLivestockActivityService();
