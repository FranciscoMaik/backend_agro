import { Request, Response } from 'express';

import { updateAgricuturalActivityService } from '@application/agricuturalActivity/services';

interface RequestInterface {
  name: string;
  uses_irrigation: boolean;
  uses_pesticides: boolean;
  cultivation: string;
  input: string;
  hectares: number;
  work_method: string;
  used_equipament: string;
}

class UpdateAgricuturalActivityController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;
    const data = req.body as RequestInterface;

    const agricuturalActivity = await updateAgricuturalActivityService.execute({
      ...data,
      id,
      propertyId,
    });

    res.status(200).json({ agricuturalActivity });
  }
}

export const updateAgricuturalActivityController =
  new UpdateAgricuturalActivityController();
