import { usersRepository } from '../infra/repositories';
import { getUserService } from './GetUserService';

interface ServiceInterface {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: ServiceInterface) {
    const user = await getUserService.execute({ id });
    await usersRepository.delete(user.id);
  }
}

export const deleteUserService = new DeleteUserService();
