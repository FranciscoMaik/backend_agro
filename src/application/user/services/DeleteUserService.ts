import { usersRepository } from '../infra/repositories/UsersRepository';

interface ServiceInterface {
  id: string;
}

export class DeleteUserService {
  public async execute({ id }: ServiceInterface) {
    await usersRepository.delete(id);
  }
}
