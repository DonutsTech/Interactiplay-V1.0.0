import type { NextFunction, Request, Response } from 'express';
import type { createPixel } from '../../@types/interface/pixel';
import { pixelService } from '../../services/pixel';

class PixelController {
  public async createPixelWithCampaign(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const body: createPixel = request.body;
      const result = await pixelService.createPixelWithCampaign(id, body);
      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const pixelController = new PixelController();
