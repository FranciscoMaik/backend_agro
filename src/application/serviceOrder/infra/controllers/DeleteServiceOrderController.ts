import { Request, Response } from 'express';

import { deleteServiceOrderService } from '@application/serviceOrder/services';

class DeleteServiceOrderController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await deleteServiceOrderService.execute({ id });

    res.status(204).send();
  }
}

export const deleteServiceOrderController = new DeleteServiceOrderController();
