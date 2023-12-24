import { Router } from 'express';

// import {
//   createLivestockActivityController,
//   deleteLivestockActivityController,
//   getAllLivestockActivitiesController,
//   getLivestockActivityController,
//   updateLivestockActivityController,
// } from '@application/livestockActivity/infra/controllers';
// import {
//   createValidator,
//   updateValidator,
// } from '@application/livestockActivity/infra/validators';

const livestockActivityRoutes = Router({ mergeParams: true });

// livestockActivityRoutes.post(
//   '/',
//   createValidator,
//   createLivestockActivityController.handle,
// );

// livestockActivityRoutes.get('/', getAllLivestockActivitiesController.handle);

// livestockActivityRoutes.get('/:id', getLivestockActivityController.handle);

// livestockActivityRoutes.put(
//   '/:id',
//   updateValidator,
//   updateLivestockActivityController.handle,
// );

// livestockActivityRoutes.delete(
//   '/:id',
//   deleteLivestockActivityController.handle,
// );

export { livestockActivityRoutes };
