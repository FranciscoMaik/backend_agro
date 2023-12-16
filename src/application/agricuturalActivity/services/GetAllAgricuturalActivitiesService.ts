import { getPropertyService } from '@application/property/services';

import agricuturalActivitiesRepository from '../infra/repositories/AgricuturalActivitiesRepository';

interface ServiceInterface {
  propertyId: string;
}

class GetAllAgricuturalActivitiesService {
  async execute({ propertyId }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const agricuturalActivities = await agricuturalActivitiesRepository.findAll(
      property.id,
    );

    return agricuturalActivities;
  }
}

export const getAllAgricuturalActivitiesService =
  new GetAllAgricuturalActivitiesService();
