import type { Router } from "express";
import { testABController } from "../../controllers/testAB";

class TestABPublicRouter {
  public static create(router: Router): void {
    router.get('/testAB/:id/embed', testABController.getTestABByEmbedForId);
  }
}

export default TestABPublicRouter;
