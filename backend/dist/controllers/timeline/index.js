import { timelineService } from '../../services/timeline';
class TimelineController {
    async createPixelWithCampaign(request, response, next) {
        try {
            const { id } = request.params;
            const body = request.body;
            const result = await timelineService.createTimelineWithCampaign(id, body);
            return response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
export const timelineController = new TimelineController();
//# sourceMappingURL=index.js.map