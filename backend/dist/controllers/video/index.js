import { videoService } from '../../services/video';
class VideoController {
    async getVideosAllForUser(request, response, next) {
        try {
            const { user } = request;
            const videos = await videoService.getVideoAllForUser(user.ID);
            return response.status(200).json(videos);
        }
        catch (error) {
            next(error);
        }
    }
    async getVideoByIdForUser(request, response, next) {
        try {
            const { user } = request;
            const { id } = request.params;
            const video = await videoService.getVideoByIdForUser(user.ID, id);
            return response.status(200).json(video);
        }
        catch (error) {
            next(error);
        }
    }
    async getVideosAll(request, response, next) {
        try {
            const videos = await videoService.getVideoAll();
            return response.status(200).json(videos);
        }
        catch (error) {
            next(error);
        }
    }
    async getVideoById(request, response, next) {
        try {
            const { id } = request.params;
            const video = await videoService.getVideoById(id);
            return response.status(200).json(video);
        }
        catch (error) {
            next(error);
        }
    }
    async createVideoForUser(request, response, next) {
        try {
            const { user } = request;
            const file = request.file;
            if (!file) {
                return response.status(400).json({ error: 'No file uploaded' });
            }
            const video = await videoService.createVideoForUser(user.ID, file);
            return response.status(201).json(video);
        }
        catch (error) {
            next(error);
        }
    }
    async putVideoForUser(request, response, next) {
        try {
            const { id } = request.params;
            const data = request.body;
            const video = await videoService.putVideoForUser(id, data);
            return response.status(200).json(video);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteVideoForUser(request, response, next) {
        try {
            const { id } = request.params;
            const deleteVideo = await videoService.deleteVideoForUser(id);
            return response.status(200).json(deleteVideo);
        }
        catch (error) {
            next(error);
        }
    }
}
export const videoController = new VideoController();
//# sourceMappingURL=index.js.map