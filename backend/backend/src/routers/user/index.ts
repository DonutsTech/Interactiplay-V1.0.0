import type { Router } from 'express';
import { userController } from '../../controllers/user';
import { isAuthenticateTokenDb } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class UserRouter {
  public static create(router: Router): void {
    router.patch('/user', isAuthenticateTokenDb, isValidateUserPlan, userController.updateUser);
    router.post(
      '/user/upload-image',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      userController.uploadImage,
    );
  }
}

export default UserRouter;
