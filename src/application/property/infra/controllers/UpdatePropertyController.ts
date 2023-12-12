import { Request, Response } from 'express';

import { updatePropertyService } from '@application/property/services';

interface RequestInterface {
  name: string;
  hectares: number;
  address: string;
  exploration: string;
  classification: string;
  hydric_source: string;
  electrical_source: string;
}

class UpdatePropertyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body as RequestInterface;

    const property = await updatePropertyService.execute({ id, ...data });

    res.status(201).json({ property });
  }
}

export const updatePropertyController = new UpdatePropertyController();
