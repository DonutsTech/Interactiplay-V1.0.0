import { historyPlaysService } from '../../services/historyPlays';
class HistoryPlaysController {
    async getHistoryPlaysByUserId(request, response, next) {
        try {
            const { user } = request;
            const historyPlays = await historyPlaysService.getHistoryPlaysByUserId(user.ID);
            return response.status(200).json(historyPlays);
        }
        catch (error) {
            next(error);
        }
    }
    async testUpdate(request, response, next) {
        try {
            const { id } = request.params;
            const historyPlay = await historyPlaysService.testUpdate(id);
            return response.status(200).json(historyPlay);
        }
        catch (error) {
            next(error);
        }
    }
}
export const historyPlaysController = new HistoryPlaysController();
//# sourceMappingURL=index.js.map