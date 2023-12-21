import { Request, Response } from 'express';

import { getServiceOrderService } from '@application/serviceOrder/services';

class GetServiceOrderController {
  async handle(req: Request, res: Response) {
    const { id, farmerId, familyId, propertyId } = req.params;

    const serviceOrder = await getServiceOrderService.execute({
      id,
      farmerId,
      familyId,
      propertyId,
    });

    res.status(200).json({ serviceOrder });
  }
}

export const getServiceOrderController = new GetServiceOrderController();
