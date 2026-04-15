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
    router.get(
      '/history-plays/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      historyPlaysController.testUpdate,
    );
    router.get('/test', historyPlaysController.test);
  }
}

export default HistoryPlaysRouter;
