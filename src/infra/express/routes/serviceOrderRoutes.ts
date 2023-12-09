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

import { authMiddleware } from '../middlewares';

const serviceOrderRouter = Router({ mergeParams: true });

serviceOrderRouter.use(authMiddleware);

serviceOrderRouter.post(
  '/',
  createValidator,
  createServiceOrderController.handle,
);

serviceOrderRouter.get('/', getAllServiceOrdersController.handle);

serviceOrderRouter.get('/:id', getServiceOrderController.handle);

serviceOrderRouter.put(
  '/:id',
  updateValidator,
  updateServiceOrderController.handle,
);

serviceOrderRouter.delete('/:id', deleteServiceOrderController.handle);

export { serviceOrderRouter };
