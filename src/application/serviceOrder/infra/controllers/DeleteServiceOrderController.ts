import { Request, Response } from 'express';

import { deleteServiceOrderService } from '@application/serviceOrder/services';

class DeleteServiceOrderController {
  async handle(req: Request, res: Response) {
    const { id, farmerId } = req.params;

    await deleteServiceOrderService.execute({ id, farmerId });

    res.status(204).send();
  }
}

export const deleteServiceOrderController = new DeleteServiceOrderController();
