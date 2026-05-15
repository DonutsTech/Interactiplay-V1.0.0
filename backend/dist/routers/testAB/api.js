import { isAuthenticateTokenDb, schemaValidator } from "../../middleware";
import { isValidateUserPlan } from "../../middleware/isValidateUserPlan";
import { testABController } from "../../controllers/testAB";
class TestABApiRouter {
    static create(router) {
        router.get("/user/testAB", isAuthenticateTokenDb, isValidateUserPlan, testABController.getTestABAllForUser);
        router.get('/user/testAB/:id', isAuthenticateTokenDb, isValidateUserPlan, testABController.getTestABByIdForUser);
        router.get("/testAB", isAuthenticateTokenDb, isValidateUserPlan, testABController.getTestABAll);
        router.post('/user/testAB', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('testAB/create'), testABController.createTestABForUser);
        router.delete('/user/testAB/:id', isAuthenticateTokenDb, isValidateUserPlan, testABController.deleteTestABForUser);
    }
}
export default TestABApiRouter;
//# sourceMappingURL=api.js.map