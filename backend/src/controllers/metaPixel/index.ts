import type { NextFunction, Request, Response } from 'express';
import type { createMetaPixelEvent } from '../../@types/interface/metaPixel';
import { metaPixelService } from '../../services/metaPixel';

class MetaPixelController {
  public async trackEvent(request: Request, response: Response, next: NextFunction) {
    try {
      const body: createMetaPixelEvent = {
        ...request.body,
        user_data: {
          ...request.body.user_data,
          client_ip_address: request.ip,
          client_user_agent: request.headers['user-agent'] || ''
        }
      };

      const result = await metaPixelService.trackEvent(body);
      response.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const metaPixelController = new MetaPixelController();
