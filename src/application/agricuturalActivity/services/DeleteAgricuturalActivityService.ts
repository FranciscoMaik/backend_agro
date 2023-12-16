import agricuturalActivitiesRepository from '../infra/repositories/AgricuturalActivitiesRepository';
import { getAgricuturalActivityService } from './GetAgricuturalActivityService';

interface ServiceInterface {
  id: string;
  propertyId: string;
}

class DeleteAgricuturalActivityService {
  async execute({ id, propertyId }: ServiceInterface) {
    const livestockActivity = await getAgricuturalActivityService.execute({
      id,
      propertyId,
    });

    await agricuturalActivitiesRepository.delete(
      livestockActivity.id,
      livestockActivity.property_id,
    );
  }
}

export const deleteAgricuturalActivityService =
  new DeleteAgricuturalActivityService();
