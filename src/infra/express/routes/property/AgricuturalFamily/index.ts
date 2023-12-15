import { Router } from 'express';

import {
  createAgricuturalFamilyController,
  deleteAgricuturalFamilyController,
  getAgricuturalFamilyController,
  getAllAgricuturalFamilysController,
  updateAgricuturalFamilyController,
} from '@application/agricuturalFamily/infra/controllers';
import {
  createValidator,
  updateValidator,
} from '@application/agricuturalFamily/infra/validators';

const agricuturalFamilyRoutes = Router({ mergeParams: true });

agricuturalFamilyRoutes.post(
  '/',
  createValidator,
  createAgricuturalFamilyController.handle,
);

agricuturalFamilyRoutes.get('/', getAllAgricuturalFamilysController.handle);

agricuturalFamilyRoutes.get('/:id', getAgricuturalFamilyController.handle);

agricuturalFamilyRoutes.put(
  '/:id',
  updateValidator,
  updateAgricuturalFamilyController.handle,
);

agricuturalFamilyRoutes.delete(
  '/:id',
  deleteAgricuturalFamilyController.handle,
);

export { agricuturalFamilyRoutes };
