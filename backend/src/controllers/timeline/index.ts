import type { NextFunction, Request, Response } from 'express';
import type { createTimeLine } from '../../@types/interface/timeline';
import { timelineService } from '../../services/timeline';

class TimelineController {
  public async createPixelWithCampaign(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const body: createTimeLine = request.body;
      const result = await timelineService.createTimelineWithCampaign(id, body);
      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const timelineController = new TimelineController();
