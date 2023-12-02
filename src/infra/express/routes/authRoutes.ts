import { Router } from 'express';

import {
  authenticateController,
  sendEmailVerificationController,
  emailVerificationController,
} from '@application/auth/infra/controllers';
import {
  authenticateValidator,
  sendEmailVerificationValidator,
  emailVerificationValidator,
} from '@application/auth/infra/validators';

import { authMiddleware } from '../middlewares';

const authRoutes = Router();

authRoutes.post('/', authenticateValidator, authenticateController.handle);

authRoutes.post(
  '/verification',
  sendEmailVerificationValidator,
  sendEmailVerificationController.handle,
);

authRoutes.patch(
  '/verification',
  authMiddleware,
  emailVerificationValidator,
  emailVerificationController.handle,
);

export { authRoutes };
