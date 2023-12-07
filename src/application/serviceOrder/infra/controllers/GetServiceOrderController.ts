import { Request, Response } from 'express';

import { getServiceOrderService } from '@application/serviceOrder/services';

class GetServiceOrderController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const serviceOrder = await getServiceOrderService.execute({ id });

    res.status(200).json({ serviceOrder });
  }
}

export const getServiceOrderController = new GetServiceOrderController();
