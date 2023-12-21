import { Request, Response } from 'express';

import { deleteServiceOrderService } from '@application/serviceOrder/services';

class DeleteServiceOrderController {
  async handle(req: Request, res: Response) {
    const { id, farmerId, familyId, propertyId } = req.params;

    await deleteServiceOrderService.execute({
      id,
      farmerId,
      familyId,
      propertyId,
    });

    res.status(204).send();
  }
}

export const deleteServiceOrderController = new DeleteServiceOrderController();
