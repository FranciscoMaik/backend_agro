import { Router } from 'express';

import {
  authenticateController,
  sendEmailVerificationCodeController,
  sendForgotPasswordCodeController,
  verifyEmailVerificationCodeController,
  verifyForgotPasswordCodeController,
} from '@application/auth/infra/controllers';
import {
  authenticateValidator,
  sendEmailVerificationCodeValidator,
  sendForgotPasswordCodeValidator,
  verifyEmailVerificationCodeValidator,
  verifyForgotPasswordCodeValidator,
} from '@application/auth/infra/validators';

const authRoutes = Router();

authRoutes.post('/', authenticateValidator, authenticateController.handle);

authRoutes.post(
  '/verification',
  sendEmailVerificationCodeValidator,
  sendEmailVerificationCodeController.handle,
);

authRoutes.patch(
  '/verification',
  verifyEmailVerificationCodeValidator,
  verifyEmailVerificationCodeController.handle,
);

authRoutes.post(
  '/forgot',
  sendForgotPasswordCodeValidator,
  sendForgotPasswordCodeController.handle,
);

authRoutes.patch(
  '/forgot',
  verifyForgotPasswordCodeValidator,
  verifyForgotPasswordCodeController.handle,
);

export { authRoutes };
