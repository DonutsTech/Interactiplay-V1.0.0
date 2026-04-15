import type { NextFunction, Request, Response } from 'express';

class VideoController {
  async getVideosAllForUser(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async getVideoByIdForUser(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async getVideosAll(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async getVideoById(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async createVideoForUser(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async putVideoForUser(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async deleteVideoForUser(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export const videoController = new VideoController();
