import { videoUpload } from '../../config/multerConfig';
import { videoController } from '../../controllers/video';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateLimitVideo } from '../../middleware/isValidateLimitVideo';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class VideoRouter {
    static create(router) {
        router.post('/user/videos', isAuthenticateTokenDb, isValidateUserPlan, isValidateLimitVideo, videoUpload.single('video'), videoController.createVideoForUser);
        router.get('/user/videos', isAuthenticateTokenDb, isValidateUserPlan, videoController.getVideosAllForUser);
        router.get('/user/videos/:id', isAuthenticateTokenDb, isValidateUserPlan, videoController.getVideoByIdForUser);
        router.get('/videos', isAuthenticateTokenDb, isValidateUserPlan, videoController.getVideosAll);
        router.get('/videos/:id', isAuthenticateTokenDb, isValidateUserPlan, videoController.getVideoById);
        router.put('/user/videos/:id', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('video/update'), videoController.putVideoForUser);
        router.delete('/user/videos/:id', isAuthenticateTokenDb, isValidateUserPlan, videoController.deleteVideoForUser);
    }
}
export default VideoRouter;
//# sourceMappingURL=index.js.map