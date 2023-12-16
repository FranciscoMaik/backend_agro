import { getPropertyService } from '@application/property/services';

import livestockActivitiesRepository from '../infra/repositories/LivestockActivitiesRepository';

interface ServiceInterface {
  propertyId: string;
}

class GetAllLivestockActivitiesService {
  async execute({ propertyId }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const livestockActivities = await livestockActivitiesRepository.findAll(
      property.id,
    );

    return livestockActivities;
  }
}

export const getAllLivestockActivitiesService =
  new GetAllLivestockActivitiesService();
