import { Router } from 'express';

import {
  createLivestockActivityController,
  deleteLivestockActivityController,
  getAllLivestockActivitiesController,
  getLivestockActivityController,
  updateLivestockActivityController,
} from '@application/livestockActivity/infra/controllers';
import {
  createValidator,
  updateValidator,
} from '@application/livestockActivity/infra/validators';

const LivestockActivityRoutes = Router({ mergeParams: true });

LivestockActivityRoutes.post(
  '/',
  createValidator,
  createLivestockActivityController.handle,
);

LivestockActivityRoutes.get('/', getAllLivestockActivitiesController.handle);

LivestockActivityRoutes.get('/:id', getLivestockActivityController.handle);

LivestockActivityRoutes.put(
  '/:id',
  updateValidator,
  updateLivestockActivityController.handle,
);

LivestockActivityRoutes.delete(
  '/:id',
  deleteLivestockActivityController.handle,
);

export { LivestockActivityRoutes };
