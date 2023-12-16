import { NotFoundError } from '@infra/express/errors';

import { getPropertyService } from '@application/property/services';

import agricuturalActivitiesRepository from '../infra/repositories/AgricuturalActivitiesRepository';

interface ServiceInterface {
  id: string;
  propertyId: string;
}

class GetAgricuturalActivityService {
  async execute({ id, propertyId }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const agricuturalActivity = await agricuturalActivitiesRepository.findById(
      id,
      property.id,
    );

    if (!agricuturalActivity) {
      throw new NotFoundError('agricutural activity not found');
    }

    return agricuturalActivity;
  }
}

export const getAgricuturalActivityService =
  new GetAgricuturalActivityService();
