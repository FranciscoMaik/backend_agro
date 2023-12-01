import { usersRepository } from '../infra/repositories';
import { getUserService } from './GetUserService';

interface ServiceInterface {
  id: string;
}

class SoftDeleteUserService {
  public async execute({ id }: ServiceInterface) {
    const user = await getUserService.execute({ id });

    await usersRepository.update({ ...user, active: false });
  }
}

export const softDeleteUserService = new SoftDeleteUserService();
