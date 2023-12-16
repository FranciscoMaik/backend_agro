import { LivestockActivity } from '@application/@shared/types/entities';
import { Create } from '@application/@shared/types/helpers';
import { getPropertyService } from '@application/property/services';

import livestockActivitiesRepository from '../infra/repositories/LivestockActivitiesRepository';

interface ServiceInterface {
  name: string;
  females_amount: number;
  males_amount: number;
  breed: string;
  size: string;
  production_system: string;
  power_supply: string;
  goal: string;
  hectares: number;
  propertyId: string;
}

class CreateLivestockActivityService {
  async execute({
    name,
    females_amount,
    males_amount,
    breed,
    size,
    production_system,
    power_supply,
    goal,
    hectares,
    propertyId,
  }: ServiceInterface) {
    const property = await getPropertyService.execute({ id: propertyId });

    const data: Create<LivestockActivity> = {
      name,
      females_amount,
      males_amount,
      breed,
      size,
      production_system,
      power_supply,
      goal,
      hectares,
      property_id: property.id,
    };

    const livestockActivity = await livestockActivitiesRepository.create(data);

    return livestockActivity;
  }
}

export const createLivestockActivityService =
  new CreateLivestockActivityService();
