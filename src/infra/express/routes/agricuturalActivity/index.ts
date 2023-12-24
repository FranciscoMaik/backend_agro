import { Router } from 'express';

import {
  createAgricuturalActivityController,
  deleteAgricuturalActivityController,
  getAgricuturalActivityController,
  getAllAgricuturalActivitiesController,
  updateAgricuturalActivityController,
} from '@application/agricuturalActivity/infra/controllers';
import {
  createValidator,
  updateValidator,
} from '@application/agricuturalActivity/infra/validators';

const agricuturalActivityRoutes = Router({ mergeParams: true });

agricuturalActivityRoutes.post(
  '/',
  createValidator,
  createAgricuturalActivityController.handle,
);

agricuturalActivityRoutes.get(
  '/',
  getAllAgricuturalActivitiesController.handle,
);

agricuturalActivityRoutes.get('/:id', getAgricuturalActivityController.handle);

agricuturalActivityRoutes.put(
  '/:id',
  updateValidator,
  updateAgricuturalActivityController.handle,
);

agricuturalActivityRoutes.delete(
  '/:id',
  deleteAgricuturalActivityController.handle,
);

export { agricuturalActivityRoutes };
