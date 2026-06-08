import type { NextFunction, Request, Response } from 'express';
import type { MulterS3File } from '../../@types/file';
import type { RegisterUser, UserUpdateEmailByAdmin } from '../../@types/interface/user';
import { userService } from '../../services/user';

class UserController {
  async updateUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const body = request.body as Partial<RegisterUser>;
      const updatedUser = await userService.update(user.ID, body);
      return response.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async uploadImage(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const { file } = request as Request & { file: MulterS3File };
      const uploadedPhoto = await userService.uploadImage(user.ID, file);
      return response.status(200).json(uploadedPhoto);
    } catch (error) {
      next(error);
    }
  }

  async fristLogin(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const updatedUser = await userService.fristLogin(user.ID);
      return response.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async updateUserEmailByAdmin(request: Request, response: Response, next: NextFunction) {
    try {
      const body: UserUpdateEmailByAdmin = request.body;
      const updatedUser = await userService.updateUserEmailByAdmin(body);
      return response.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async deleteInfoUsers(request: Request, response: Response, next: NextFunction) {
    try {
      const deletedInfo = await userService.deleteInfoUsers();
      return response.status(200).json(deletedInfo);
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
