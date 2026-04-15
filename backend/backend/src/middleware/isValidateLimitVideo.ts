import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../error';
import type { User } from '../generated/prisma/browser';
import { planService } from '../services/plan';
import { videoService } from '../services/video';

export async function isValidateLimitVideo(
  request: Request,
  _response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { user } = request as Request & { user: User };

    if (!user) {
      throw new CustomError(`Usúario não encontrado na requisição`, StatusCodes.BAD_REQUEST);
    }

    if (!user.PLAN_ID) {
      throw new CustomError(`Plano do usuário não encontrado`, StatusCodes.BAD_REQUEST);
    }

    const plan = await planService.showId(user.PLAN_ID);

    if (!plan) {
      throw new CustomError(`Plano do usuário não encontrado`, StatusCodes.BAD_REQUEST);
    }

    const countVideoForUser = await videoService.countVideoForUser(user.ID);

    if (countVideoForUser >= plan.VIDEO_LIMIT) {
      throw new CustomError(
        `Limite de vídeos atingido para o plano atual. Por favor, atualize seu plano para adicionar mais vídeos.`,
        StatusCodes.BAD_REQUEST,
      );
    }

    next();
  } catch (error) {
    next(error);
  }
}
