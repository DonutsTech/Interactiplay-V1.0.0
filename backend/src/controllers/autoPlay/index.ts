import type { NextFunction, Request, Response } from 'express';
import type { createAutoPlay } from '../../@types/interface/autoPlay';
import { autoPlayService } from '../../services/autoPlay';

class AutoPlayController {
  public async createAutoPlayWithCampaign(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params as { id: string };
      const body: createAutoPlay = request.body;
      const result = await autoPlayService.createAutoPlayWithCampaign(id, body);
      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const autoPlayController = new AutoPlayController();
