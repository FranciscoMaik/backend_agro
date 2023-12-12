import { propertiesRepository } from '../infra/repositories/PropertiesRepository';
import { getPropertyService } from './GetPropertyService';

interface ServiceInterface {
  id: string;
}

class DeletePropertyService {
  async execute({ id }: ServiceInterface) {
    const property = await getPropertyService.execute({ id });
    await propertiesRepository.delete(property.id);
  }
}

export const deletePropertyService = new DeletePropertyService();
