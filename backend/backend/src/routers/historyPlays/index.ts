import type { Router } from "express";
import { historyPlaysController } from "../../controllers/historyPlays";
import { isAuthenticateTokenDb } from "../../middleware";

class HistoryPlaysRouter {
  public static create(router: Router): void {
    router.get("/user/history-plays", isAuthenticateTokenDb, historyPlaysController.getHistoryPlaysByUserId);
    router.get("/history-plays/:id", historyPlaysController.testUpdate);
    // router.get("/test", historyPlaysController.test);
  }
}

export default HistoryPlaysRouter;
