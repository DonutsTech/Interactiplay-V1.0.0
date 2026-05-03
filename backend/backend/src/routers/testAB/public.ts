import type { Router } from "express";
import { isAuthenticateToken, isAuthenticateTokenDb, schemaValidator } from "../../middleware";
import { isValidateUserPlan } from "../../middleware/isValidateUserPlan";
import { testABController } from "../../controllers/testAB";

class TestABPublicRouter {
  public static create(router: Router): void {
    router.get(
      "/user/testAB",
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.getTestABAllForUser,
    );
    router.get(
      '/user/testAB/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.getTestABByIdForUser,
    )

    router.get(
      "/testAB",
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.getTestABAll,
    );

    router.post(
      '/user/testAB',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('testAB/create'),
      testABController.createTestABForUser,
    )

    router.delete(
      '/user/testAB/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.deleteTestABForUser,
    );
  }
}

export default TestABPublicRouter;
