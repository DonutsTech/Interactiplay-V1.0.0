import type { Router } from "express";
import { userController } from "../../controllers/user";
import { isAuthenticateTokenDb } from "../../middleware";

class UserRouter {
  public static create(router: Router): void {
    router.patch("/user", isAuthenticateTokenDb, userController.updateUser);
    router.post("/user/upload-image", isAuthenticateTokenDb, userController.uploadImage);
  }
}

export default UserRouter;
