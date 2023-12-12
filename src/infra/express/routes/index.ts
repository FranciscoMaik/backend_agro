import { Router } from 'express';

import { authRoutes } from './auth';
import { farmerRoutes } from './farmer';
import { propertyRoutes } from './property';
import { userRoutes } from './user';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/auth', authRoutes);
appRoutes.use('/farmers', farmerRoutes);
appRoutes.use('/properties', propertyRoutes);

export { appRoutes };
