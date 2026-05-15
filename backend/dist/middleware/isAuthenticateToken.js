import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../error';
import { authService } from '../services/auth';
import { userService } from '../services/user';
export async function isAuthenticateToken(request, response, next) {
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
        const user = await userService.showId(checkinToken.sub);
        if (!user) {
            throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
        }
        request.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=isAuthenticateToken.js.map