import agricuturalFamilysRepository from '../infra/repositories/AgricuturalFamilysRepository';
import { getAgricuturalFamilyService } from './GetAgricuturalFamilyService';

interface ServiceInterface {
  id: string;
  propertyId: string;
}

class DeleteAgricuturalFamilyService {
  async execute({ id, propertyId }: ServiceInterface) {
    const agricuturalFamily = await getAgricuturalFamilyService.execute({
      id,
      propertyId,
    });

    await agricuturalFamilysRepository.delete(
      agricuturalFamily.id,
      agricuturalFamily.property_id,
    );
  }
}

export const deleteAgricuturalFamilyService =
  new DeleteAgricuturalFamilyService();
