import type { Router } from 'express';
import { testABController } from '../../controllers/testAB';
import { Role } from '../../enums/role.enum';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateRole } from '../../middleware/isValidateRole';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class TestABApiRouter {
  public static create(router: Router): void {
    router.get(
      '/user/testAB',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.getTestABAllForUser,
    );
    router.get(
      '/user/testAB/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.getTestABByIdForUser,
    );

    router.get(
      '/testAB',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      isValidateRole([Role.ADMIN]),
      testABController.getTestABAll,
    );

    router.post(
      '/user/testAB',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('testAB/create'),
      testABController.createTestABForUser,
    );

    router.delete(
      '/user/testAB/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      testABController.deleteTestABForUser,
    );
  }
}

export default TestABApiRouter;
