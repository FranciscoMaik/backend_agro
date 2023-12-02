import { Router } from 'express';

import {
  authenticateController,
  sendVerificationEmailController,
} from '@application/auth/infra/controllers';
import {
  authenticateValidator,
  sendVerificationEmailValidator,
} from '@application/auth/infra/validators';

const authRoutes = Router();

authRoutes.post('/', authenticateValidator, authenticateController.handle);

authRoutes.post(
  '/verification',
  sendVerificationEmailValidator,
  sendVerificationEmailController.handle,
);

export { authRoutes };
