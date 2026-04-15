import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../error';
import type { User } from '../generated/prisma/browser';
import { planService } from '../services/plan';

export async function isValidateLimitVideo(
  request: Request,
  response: Response,
  next: NextFunction,
) {
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
  } catch (error) {
    next(error);
  }
}
