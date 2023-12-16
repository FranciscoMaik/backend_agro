import { LivestockActivity } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import livestockActivitiesRepository from '../infra/repositories/LivestockActivitiesRepository';
import { getLivestockActivityService } from './GetLivestockActivityService';

interface ServiceInterface {
  id: string;
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

class UpdateLivestockActivityService {
  async execute({
    id,
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
    const livestockActivity = await getLivestockActivityService.execute({
      id,
      propertyId,
    });

    const data: Update<LivestockActivity> = {
      id,
      name,
      females_amount,
      males_amount,
      breed,
      size,
      production_system,
      power_supply,
      goal,
      hectares,
      property_id: livestockActivity?.property_id,
    };

    const updatedLivestockActivity =
      await livestockActivitiesRepository.update(data);

    return updatedLivestockActivity;
  }
}

export const updateLivestockActivityService =
  new UpdateLivestockActivityService();
