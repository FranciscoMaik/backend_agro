import { Router } from 'express';

import { authMiddleware } from '@infra/express/middlewares';

import {
  createPropertyController,
  deletePropertyController,
  getAllPropertiesController,
  getPropertyController,
  updatePropertyController,
} from '@application/property/infra/controllers';
import {
  createValidator,
  updateValidator,
} from '@application/property/infra/validators';

import { agricuturalActivityRoutes } from './agricuturalActivity';
import { agricuturalFamilyRoutes } from './agricuturalFamily';
import { livestockActivityRoutes } from './livestockActivity';

const propertyRoutes = Router();

propertyRoutes.use(authMiddleware);

propertyRoutes.post('/', createValidator, createPropertyController.handle);

propertyRoutes.get('/', getAllPropertiesController.handle);

propertyRoutes.get('/:id', getPropertyController.handle);

propertyRoutes.put('/:id', updateValidator, updatePropertyController.handle);

propertyRoutes.delete('/:id', deletePropertyController.handle);

propertyRoutes.use('/:propertyId/agricutural-familys', agricuturalFamilyRoutes);

propertyRoutes.use(
  '/:propertyId/livestock-activities',
  livestockActivityRoutes,
);

propertyRoutes.use(
  '/:propertyId/agricutural-activities',
  agricuturalActivityRoutes,
);

export { propertyRoutes };
