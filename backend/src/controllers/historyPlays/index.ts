import type { NextFunction, Request, Response } from 'express';
import { historyPlaysService } from '../../services/historyPlays';

class HistoryPlaysController {
  async getHistoryPlaysByUserId(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const historyPlays = await historyPlaysService.getHistoryPlaysByUserId(user.ID);
      return response.status(200).json(historyPlays);
    } catch (error) {
      next(error);
    }
  }
}

export const historyPlaysController = new HistoryPlaysController();
