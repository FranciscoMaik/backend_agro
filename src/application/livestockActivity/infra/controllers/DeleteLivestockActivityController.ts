import { Request, Response } from 'express';

import { deleteLivestockActivityService } from '@application/livestockActivity/services';

class DeleteLivestockActivityController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;

    await deleteLivestockActivityService.execute({ id, propertyId });

    res.status(204).send();
  }
}

export const deleteLivestockActivityController =
  new DeleteLivestockActivityController();
