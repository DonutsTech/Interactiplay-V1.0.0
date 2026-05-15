import type { NextFunction, Request, Response } from 'express';
import type { createGancho } from '../../@types/interface/ganho';
import { ganchoService } from '../../services/gancho';

class GanhoController {
  public async createGanchoWithCampaign(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const body: createGancho = request.body;
      const result = await ganchoService.createGanchoWithCampaign(id, body);
      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const ganchoController = new GanhoController();
