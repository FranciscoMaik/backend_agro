import { CreateUserController } from '@application/user/infra/controllers/CreateUserController';
import { DeleteUserController } from '@application/user/infra/controllers/DeleteUserController';
import { GetUserController } from '@application/user/infra/controllers/GetUserController';
import { SoftDeleteUserController } from '@application/user/infra/controllers/SoftDeleteUserController';
import { UpdateUserController } from '@application/user/infra/controllers/UpdateUserController';

export const createUserController = new CreateUserController();
export const deleteUserController = new DeleteUserController();
export const getUserController = new GetUserController();
export const softDeleteUserController = new SoftDeleteUserController();
export const updateUserController = new UpdateUserController();
