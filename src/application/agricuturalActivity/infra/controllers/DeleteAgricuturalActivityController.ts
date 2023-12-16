import { Request, Response } from 'express';

import { deleteAgricuturalActivityService } from '@application/agricuturalActivity/services';

class DeleteAgricuturalActivityController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;

    await deleteAgricuturalActivityService.execute({ id, propertyId });

    res.status(204).send();
  }
}

export const deleteAgricuturalActivityController =
  new DeleteAgricuturalActivityController();
