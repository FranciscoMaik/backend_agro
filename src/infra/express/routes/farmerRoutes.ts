import { Router } from 'express';

import { authMiddleware } from '../middlewares';

const farmerRoutes = Router();

farmerRoutes.use(authMiddleware);

farmerRoutes.post('/farmers');

farmerRoutes.put('/farmers/:id');

farmerRoutes.patch('/farmers/:id/soft-delete');

farmerRoutes.delete('/farmers/:id');

export { farmerRoutes };
