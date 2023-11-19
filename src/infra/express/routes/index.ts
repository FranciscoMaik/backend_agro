import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { userRoutes } from './userRoutes';

const appRoutes = Router();

appRoutes.use(userRoutes);
appRoutes.use(authRoutes);

export { appRoutes };
