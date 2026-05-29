import type { Router } from 'express';
import { historyPlaysController } from '../../controllers/historyPlays';
import { isAuthenticateTokenDb } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class HistoryPlaysRouter {
  public static create(router: Router): void {
    router.get(
      '/user/history-plays',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      historyPlaysController.getHistoryPlaysByUserId,
    );
  }
}

export default HistoryPlaysRouter;
