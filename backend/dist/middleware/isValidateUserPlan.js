import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../error';
export async function isValidateUserPlan(request, _response, next) {
    try {
        const { user } = request;
        if (!user) {
            throw new CustomError(`Usúario não encontrado na requisição`, StatusCodes.BAD_REQUEST);
        }
        if (user.ACTIVE === false) {
            throw new CustomError(`Plano do usuário inativo`, StatusCodes.BAD_REQUEST);
        }
        next();
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=isValidateUserPlan.js.map