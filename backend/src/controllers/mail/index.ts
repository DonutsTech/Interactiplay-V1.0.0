import type { NextFunction, Request, Response } from "express";
import { mailService } from "../../services/mail";
import { MailPages } from "../../@types/interface/mail";

class MailController {
  async postSendEmailContact(request: Request, response: Response, next: NextFunction) {
    try {
      const body: MailPages = request.body;
      const serviceMail = await mailService.sendNewContactRequestEmail(body);
      return response.status(200).json(serviceMail);
    } catch (error) {
      next(error);
    }
  }

  async postSendEmailPhotoUser(request: Request, response: Response, next: NextFunction) {
    try {
      const body: MailPages = request.body;
      const files = request.files as Express.Multer.File[] | undefined;
      const serviceMail = await mailService.sendPhotosRequestEmail(body, files);
      return response.status(200).json(serviceMail);
    } catch (error) {
      next(error);
    }
  }
}

export const mailController = new MailController();
