import { Router } from 'express';

import { authenticateController } from '@application/auth/infra/controllers';
import { authenticateValidator } from '@application/auth/infra/validators';

const authRoutes = Router();

authRoutes.post('/auth', authenticateValidator, authenticateController.handle);

export { authRoutes };
