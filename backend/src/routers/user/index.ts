import type { Router } from 'express';
import { imageUpload } from '../../config/multerConfig';
import { userController } from '../../controllers/user';
import { Role } from '../../enums/role.enum';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateRole } from '../../middleware/isValidateRole';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

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
    );
    router.post(
      '/admin/update-user-email',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      isValidateRole([Role.ADMIN]),
      schemaValidator('user/updateEmail'),
      userController.updateUserEmailByAdmin,
    );
    router.delete(
      '/admin/delete-info-users',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      isValidateRole([Role.ADMIN]),
      userController.deleteInfoUsers,
    );
  }
}

export default UserRouter;
