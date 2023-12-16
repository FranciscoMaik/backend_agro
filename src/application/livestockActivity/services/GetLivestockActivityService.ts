import { NotFoundError } from '@infra/express/errors';

import { getPropertyService } from '@application/property/services';

import livestockActivitiesRepository from '../infra/repositories/LivestockActivitiesRepository';

interface ServiceInterface {
  id: string;
  propertyId: string;
}

class GetLivestockActivityService {
  async execute({ id, propertyId }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const livestockActivity = await livestockActivitiesRepository.findById(
      id,
      property.id,
    );

    if (!livestockActivity) {
      throw new NotFoundError('livestock activity not found');
    }

    return livestockActivity;
  }
}

export const getLivestockActivityService = new GetLivestockActivityService();
