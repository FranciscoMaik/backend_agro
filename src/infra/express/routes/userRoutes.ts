import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  getUserController,
  softDeleteUserController,
  updateUserController,
} from '@application/user/infra/controllers';
import { storeValidator } from '@application/user/infra/validators';

import { authMiddleware } from '../middlewares';

const userRoutes = Router();

userRoutes.post('/users', storeValidator, createUserController.handle);

userRoutes.get('/users', authMiddleware, getUserController.handle);

userRoutes.put('/users', authMiddleware, updateUserController.handle);

userRoutes.patch(
  '/users/soft-delete',
  authMiddleware,
  softDeleteUserController.handle,
);

userRoutes.delete('/users', authMiddleware, deleteUserController.handle);

export { userRoutes };
