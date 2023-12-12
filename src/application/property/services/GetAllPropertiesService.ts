import { propertiesRepository } from '../infra/repositories/PropertiesRepository';

class GetAllPropertiesService {
  async execute() {
    const properties = await propertiesRepository.findAll();

    return properties;
  }
}

export const getAllPropertiesService = new GetAllPropertiesService();
