import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../error';
import type { User } from '../generated/prisma/browser';

export async function isValidateUserPlan(
  request: Request,
  _response: Response,
  next: NextFunction,
) {
  try {
    const { user } = request as Request & { user: User };

    if (!user) {
      throw new CustomError(`Usúario não encontrado na requisição`, StatusCodes.BAD_REQUEST);
    }

    if (user.ACTIVE === false) {
      throw new CustomError(`Plano do usuário inativo`, StatusCodes.BAD_REQUEST);
    }

    next();
  } catch (error) {
    next(error);
  }
}
