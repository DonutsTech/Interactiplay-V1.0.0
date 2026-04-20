import type { NextFunction, Request, Response } from 'express';
import type { createExternalLink } from '../../@types/interface/externalLink';
import { externalLinkService } from '../../services/externalLink';

class ExternalLinkController {
  public async createExternalLinkWithCampaign(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params as { id: string };
      const body: createExternalLink = request.body;
      const result = await externalLinkService.createExternalLinkWithCampaign(id, body);
      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const externalLinkController = new ExternalLinkController();
