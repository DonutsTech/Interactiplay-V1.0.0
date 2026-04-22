import type { NextFunction, Request, Response } from "express";
import { MAX_SIZE } from "../config/multerConfig";
import { CustomError } from "../error";
import { StatusCodes } from "http-status-codes";

export function isValidateVideoSize(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const contentLength = request.get('content-length');

  if (contentLength && parseInt(contentLength) > MAX_SIZE) {
    const error = new CustomError('O tamanho do vídeo excede o limite permitido de 2GB', StatusCodes.BAD_REQUEST);
    return response.status(StatusCodes.BAD_REQUEST).json({
      STATUS: error.statusCode,
      MESSAGE: error.message,
      DATA: undefined,
    });
  }

  next();
}
