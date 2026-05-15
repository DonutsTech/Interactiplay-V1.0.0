import type { Router } from 'express';
import { userController } from '../../controllers/user';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
import { imageUpload } from '../../config/multerConfig';

class UserRouter {
  public static create(router: Router): void {
    router.patch(
      '/user',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('user/update'),
      userController.updateUser,
    );
    router.post(
      '/user/upload-image',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      imageUpload.single('image'),
      userController.uploadImage,
    );
    router.post(
      '/user/frist-acess',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      userController.fristLogin,
    )
  }
}

export default UserRouter;
