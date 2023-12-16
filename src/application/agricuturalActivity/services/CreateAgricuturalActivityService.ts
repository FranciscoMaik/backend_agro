import { AgricuturalActivity } from '@application/@shared/types/entities';
import { Create } from '@application/@shared/types/helpers';
import { getPropertyService } from '@application/property/services';

import agricuturalActivitiesRepository from '../infra/repositories/AgricuturalActivitiesRepository';

interface ServiceInterface {
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

class CreateAgricuturalActivityService {
  async execute({
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
    const property = await getPropertyService.execute({ id: propertyId });

    const data: Create<AgricuturalActivity> = {
      name,
      uses_irrigation,
      uses_pesticides,
      cultivation,
      input,
      hectares,
      work_method,
      used_equipament,
      property_id: property.id,
    };

    const agricuturalActivity =
      await agricuturalActivitiesRepository.create(data);

    return agricuturalActivity;
  }
}

export const createAgricuturalActivityService =
  new CreateAgricuturalActivityService();
