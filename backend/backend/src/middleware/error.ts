import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import { CustomError } from "../error";

export function setErrors(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode as number).json({
      STATUS: err.statusCode,
      MESSAGE: err.message,
    });
  }

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(StatusCodes.BAD_REQUEST).json({
        STATUS: StatusCodes.BAD_REQUEST,
        MESSAGE: "O arquivo ultrapassa o limite permitido.",
      });
    }
    return res.status(StatusCodes.BAD_REQUEST).json({
      STATUS: StatusCodes.BAD_REQUEST,
      MESSAGE: err.message,
    });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    STATUS: StatusCodes.INTERNAL_SERVER_ERROR,
    MESSAGE: 'Erro inesperado, tente novamente mais tarde!',
  });
}
