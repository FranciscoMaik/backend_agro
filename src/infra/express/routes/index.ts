import { Router } from 'express';

import { authRoutes } from './auth';
import { farmerRoutes } from './farmer';
import { userRoutes } from './user';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/auth', authRoutes);
appRoutes.use('/farmers', farmerRoutes);

export { appRoutes };
