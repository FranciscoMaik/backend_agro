import { Request, Response } from 'express';

import { getPropertyService } from '@application/property/services';

class GetPropertyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const property = await getPropertyService.execute({ id });

    res.status(200).json({ property });
  }
}

export const getPropertyController = new GetPropertyController();
