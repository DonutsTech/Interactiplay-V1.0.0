import type { NextFunction, Request, Response } from 'express';
import type { MulterS3File } from '../../@types/file';
import { thumbService } from '../../services/thumb';

class ThumbController {
  public async createThumbWithCampaign(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const { file } = request as Request & { file: MulterS3File };
      const result = await thumbService.createThumbWithCampaign(id, file);
      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async deleteThumbById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const result = await thumbService.deleteThumbById(id);
      return response.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const thumbController = new ThumbController();
