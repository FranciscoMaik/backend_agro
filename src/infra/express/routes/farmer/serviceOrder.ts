import { Router } from 'express';

import {
  createServiceOrderController,
  deleteServiceOrderController,
  getAllServiceOrdersController,
  getServiceOrderController,
  updateServiceOrderController,
} from '@application/serviceOrder/infra/controllers';
import {
  createValidator,
  updateValidator,
} from '@application/serviceOrder/infra/validators';

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
