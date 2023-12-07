import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { farmerRoutes } from './farmerRoutes';
import { serviceOrderRouter } from './serviceOrderRoutes';
import { userRoutes } from './userRoutes';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/auth', authRoutes);
appRoutes.use('/farmers', farmerRoutes);
appRoutes.use('/farmers/:farmerId/service-orders', serviceOrderRouter);

export { appRoutes };
