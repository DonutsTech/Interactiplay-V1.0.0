import { historyPlaysController } from '../../controllers/historyPlays';
import { isAuthenticateTokenDb } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class HistoryPlaysRouter {
    static create(router) {
        router.get('/user/history-plays', isAuthenticateTokenDb, isValidateUserPlan, historyPlaysController.getHistoryPlaysByUserId);
        router.get('/history-plays/:id', isAuthenticateTokenDb, isValidateUserPlan, historyPlaysController.testUpdate);
        //router.get('/test', historyPlaysController.test);
    }
}
export default HistoryPlaysRouter;
//# sourceMappingURL=index.js.map