import { Request, Response } from 'express';

import { deletePropertyService } from '@application/property/services';

class DeletePropertyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await deletePropertyService.execute({ id });

    res.status(204).send();
  }
}

export const deletePropertyController = new DeletePropertyController();
