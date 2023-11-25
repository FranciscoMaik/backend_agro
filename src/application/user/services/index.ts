import { CreateUserService } from './CreateUserService';
import { DeleteUserService } from './DeleteUserService';
import { GetUserService } from './GetUserService';
import { SoftDeleteUserService } from './SoftDeleteUserService';
import { UpdateUserService } from './UpdateUserService';

export const createUserService = new CreateUserService();
export const deleteUserService = new DeleteUserService();
export const getUserService = new GetUserService();
export const softDeleteUserService = new SoftDeleteUserService();
export const updateUserService = new UpdateUserService();
