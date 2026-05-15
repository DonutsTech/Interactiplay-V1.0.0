import type { NextFunction, Request, Response } from "express";

class EmailController {
  async postSendEmail(request: Request, response: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error);
    }
  }
}

