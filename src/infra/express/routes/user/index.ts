import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  getUserController,
  softDeleteUserController,
  updatePasswordController,
  updateUserController,
} from '@application/user/infra/controllers';
import {
  createValidator,
  updatePasswordValidator,
  updateValidator,
} from '@application/user/infra/validators';

import { authMiddleware } from '../../middlewares';

const userRoutes = Router();

userRoutes.post('/', createValidator, createUserController.handle);

userRoutes.use(authMiddleware);

userRoutes.get('/', getUserController.handle);

userRoutes.put('/', updateValidator, updateUserController.handle);

userRoutes.delete('/', deleteUserController.handle);

userRoutes.patch('/soft-delete', softDeleteUserController.handle);

userRoutes.patch(
  '/password',
  updatePasswordValidator,
  updatePasswordController.handle,
);

export { userRoutes };
