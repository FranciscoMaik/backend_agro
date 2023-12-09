import { Router } from 'express';

import {
  createFarmerController,
  deleteFarmerController,
  getAllFarmersController,
  getFarmerController,
  softDeleteFarmerController,
  updateFarmerController,
} from '@application/farmer/infra/controllers';
import {
  createValidator,
  updateValidator,
} from '@application/farmer/infra/validators';

import { authMiddleware } from '../../middlewares';
import { serviceOrderRoutes } from './serviceOrder';

const farmerRoutes = Router();

farmerRoutes.use(authMiddleware);

farmerRoutes.post('/', createValidator, createFarmerController.handle);

farmerRoutes.get('/', getAllFarmersController.handle);

farmerRoutes.get('/:id', getFarmerController.handle);

farmerRoutes.put('/:id', updateValidator, updateFarmerController.handle);

farmerRoutes.patch('/:id/soft-delete', softDeleteFarmerController.handle);

farmerRoutes.delete('/:id', deleteFarmerController.handle);

farmerRoutes.use('/:farmerId/service-orders', serviceOrderRoutes);

export { farmerRoutes };
