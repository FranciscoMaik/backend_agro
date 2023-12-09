import { Router } from 'express';

import {
  createServiceOrderController,
  deleteServiceOrderController,
  getAllServiceOrdersController,
  getServiceOrderController,
  updateServiceOrderController,
} from '@application/serviceOrder/infra/controllers';
import { createValidator } from '@application/serviceOrder/infra/validators/createValidator';
import { updateValidator } from '@application/serviceOrder/infra/validators/updateValidator';

const serviceOrderRoutes = Router({ mergeParams: true });

serviceOrderRoutes.post(
  '/',
  createValidator,
  createServiceOrderController.handle,
);

serviceOrderRoutes.get('/', getAllServiceOrdersController.handle);

serviceOrderRoutes.get('/:id', getServiceOrderController.handle);

serviceOrderRoutes.put(
  '/:id',
  updateValidator,
  updateServiceOrderController.handle,
);

serviceOrderRoutes.delete('/:id', deleteServiceOrderController.handle);

export { serviceOrderRoutes };
