import { Router } from 'express';

import { authRoutes } from './auth';
import { propertyRoutes } from './property';
import { userRoutes } from './user';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/auth', authRoutes);
appRoutes.use('/properties', propertyRoutes);

export { appRoutes };
