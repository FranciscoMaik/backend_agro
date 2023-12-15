import { Request, Response } from 'express';

import { deleteAgricuturalFamilyService } from '@application/agricuturalFamily/services';

class DeleteAgricuturalFamilyController {
  async handle(req: Request, res: Response) {
    const { propertyId, id } = req.params;

    await deleteAgricuturalFamilyService.execute({
      id,
      propertyId,
    });

    res.status(204).send();
  }
}

export const deleteAgricuturalFamilyController =
  new DeleteAgricuturalFamilyController();
