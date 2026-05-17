import type { NextFunction, Request, Response } from 'express';
import type { MulterS3File } from '../../@types/file';
import type { FormVideo, UpdateVideo } from '../../@types/interface/video';
import { videoService } from '../../services/video';

class VideoController {
  async getVideosAllForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const videos = await videoService.getVideoAllForUser(user.ID);
      return response.status(200).json(videos);
    } catch (error) {
      next(error);
    }
  }

  async getVideoByIdForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const { id } = request.params as { id: string };
      const video = await videoService.getVideoByIdForUser(user.ID, id);
      return response.status(200).json(video);
    } catch (error) {
      next(error);
    }
  }

  async getVideosAll(request: Request, response: Response, next: NextFunction) {
    try {
      const videos = await videoService.getVideoAll();
      return response.status(200).json(videos);
    } catch (error) {
      next(error);
    }
  }

  async getVideoById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const video = await videoService.getVideoById(id);
      return response.status(200).json(video);
    } catch (error) {
      next(error);
    }
  }

  async createVideoForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const body = request.body as FormVideo;
      const file = request.file as Express.Multer.File | undefined;
      if (!file) {
        return response.status(400).json({ error: 'No file uploaded' });
      }
      const video = await videoService.createVideoForUser(user.ID, file, body);
      return response.status(201).json(video);
    } catch (error) {
      next(error);
    }
  }

  async putVideoForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const data = request.body as UpdateVideo;
      const video = await videoService.putVideoForUser(id, data);
      return response.status(200).json(video);
    } catch (error) {
      next(error);
    }
  }

  async deleteVideoForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const deleteVideo = await videoService.deleteVideoForUser(id);
      return response.status(200).json(deleteVideo);
    } catch (error) {
      next(error);
    }
  }
}

export const videoController = new VideoController();
