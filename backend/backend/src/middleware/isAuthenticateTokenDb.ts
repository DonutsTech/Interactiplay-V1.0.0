import bcrypt from 'bcryptjs';
import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../error';
import { userModel } from '../models/user';
import { authService } from '../services/auth';

export async function isAuthenticateTokenDb(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new CustomError('Token não fornecido', StatusCodes.UNAUTHORIZED);
    }

    const [, token] = authHeader.split(' ');

    if (!token) {
      throw new CustomError('Token não fornecido', StatusCodes.UNAUTHORIZED);
    }

    const checkinToken = await authService.checkingToken(token);

    const user = await userModel.findBy({
      where: { ID: checkinToken.sub },
      include: { PLAN: true },
    });

    if (!user) {
      throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
    }

    if (user.HASHED_TOKEN && !(await bcrypt.compare(token, user.HASHED_TOKEN))) {
      throw new CustomError('Token inválido', StatusCodes.UNAUTHORIZED);
    }

    request.user = user;

    next();
  } catch (error) {
    next(error);
  }
}
