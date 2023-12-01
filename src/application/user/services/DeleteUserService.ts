import { usersRepository } from '../infra/repositories';
import { getUserService } from './GetUserService';

interface ServiceInterface {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: ServiceInterface) {
    await getUserService.execute({ id });
    await usersRepository.delete(id);
  }
}

export const deleteUserService = new DeleteUserService();
