import type { Router } from 'express';
import { videoController } from '../../controllers/video';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateLimitVideo } from '../../middleware/isValidateLimitVideo';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
import { videoUpload } from '../../config/multerConfig';

class VideoRouter {
  public static create(router: Router) {
    router.get(
      '/user/videos',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      videoController.getVideosAllForUser,
    );
    router.get(
      '/user/videos/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      videoController.getVideoByIdForUser,
    );
    router.get('/videos', isAuthenticateTokenDb, isValidateUserPlan, videoController.getVideosAll);
    router.get(
      '/videos/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      videoController.getVideoById,
    );

    router.post(
      '/user/videos',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      isValidateLimitVideo,
      videoUpload.single('video'),
      videoController.createVideoForUser,
    );
    router.put(
      '/user/videos/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('video/update'),
      videoController.putVideoForUser,
    );
    router.delete(
      '/user/videos/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      videoController.deleteVideoForUser,
    );
  }
}

export default VideoRouter;
