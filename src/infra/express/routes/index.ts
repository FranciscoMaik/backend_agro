import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { farmerRoutes } from './farmerRoutes';
import { userRoutes } from './userRoutes';

const appRoutes = Router();

appRoutes.use(userRoutes);
appRoutes.use(authRoutes);
appRoutes.use(farmerRoutes);

export { appRoutes };
