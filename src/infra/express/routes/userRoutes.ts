import { Router } from 'express';

import { UserController } from '@controllers';

const userRoutes = Router();

userRoutes.get('/users', UserController.show);
userRoutes.post('/users', UserController.store);
userRoutes.patch('/users', UserController.update);
userRoutes.delete('/users', UserController.delete);

export { userRoutes };
