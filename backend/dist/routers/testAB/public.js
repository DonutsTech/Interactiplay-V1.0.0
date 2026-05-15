import { testABController } from "../../controllers/testAB";
class TestABPublicRouter {
    static create(router) {
        router.get('/testAB/:id/embed', testABController.getTestABByEmbedForId);
    }
}
export default TestABPublicRouter;
//# sourceMappingURL=public.js.map