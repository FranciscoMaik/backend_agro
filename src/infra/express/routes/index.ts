import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { farmerRoutes } from './farmerRoutes';
import { userRoutes } from './userRoutes';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/auth', authRoutes);
appRoutes.use('/farmers', farmerRoutes);

export { appRoutes };
