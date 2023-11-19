import { Router } from 'express';

import { AuthController } from '@application/controllers';

const authRoutes = Router();

authRoutes.post('/auth', AuthController.authenticate);

export { authRoutes };
