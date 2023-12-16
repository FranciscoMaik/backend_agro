import { AgricuturalActivity } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import agricuturalActivitiesRepository from '../infra/repositories/AgricuturalActivitiesRepository';
import { getAgricuturalActivityService } from './GetAgricuturalActivityService';

interface ServiceInterface {
  id: string;
  name: string;
  uses_irrigation: boolean;
  uses_pesticides: boolean;
  cultivation: string;
  input: string;
  hectares: number;
  work_method: string;
  used_equipament: string;
  propertyId: string;
}

class UpdateAgricuturalActivityService {
  async execute({
    id,
    name,
    uses_irrigation,
    uses_pesticides,
    cultivation,
    input,
    hectares,
    work_method,
    used_equipament,
    propertyId,
  }: ServiceInterface) {
    const agricuturalActivity = await getAgricuturalActivityService.execute({
      id,
      propertyId,
    });

    const data: Update<AgricuturalActivity> = {
      id,
      name,
      uses_irrigation,
      uses_pesticides,
      cultivation,
      input,
      hectares,
      work_method,
      used_equipament,
      property_id: agricuturalActivity.property_id,
    };

    const updatedAgricuturalActivity =
      await agricuturalActivitiesRepository.update(data);

    return updatedAgricuturalActivity;
  }
}

export const updateAgricuturalActivityService =
  new UpdateAgricuturalActivityService();
