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
userRoutes.patch('/users', authMiddleware, updateUserController.handle);
userRoutes.put('/users/soft', authMiddleware, softDeleteUserController.handle);
userRoutes.delete('/users', authMiddleware, deleteUserController.handle);

export { userRoutes };
