import { userService } from '../../services/user';
class UserController {
    async updateUser(request, response, next) {
        try {
            const { user } = request;
            const body = request.body;
            const updatedUser = await userService.update(user.ID, body);
            return response.status(200).json(updatedUser);
        }
        catch (error) {
            next(error);
        }
    }
    async uploadImage(request, response, next) {
        try {
            const { user } = request;
            const { file } = request;
            const uploadedPhoto = await userService.uploadImage(user.ID, file);
            return response.status(200).json(uploadedPhoto);
        }
        catch (error) {
            next(error);
        }
    }
    async fristLogin(request, response, next) {
        try {
            const { user } = request;
            const updatedUser = await userService.fristLogin(user.ID);
            return response.status(200).json(updatedUser);
        }
        catch (error) {
            next(error);
        }
    }
}
export const userController = new UserController();
//# sourceMappingURL=index.js.map