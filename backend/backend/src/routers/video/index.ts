import type { Router } from 'express';
import { videoController } from '../../controllers/video';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateLimitVideo } from '../../middleware/isValidateLimitVideo';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

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
      schemaValidator('create/video'),
      videoController.createVideoForUser,
    );
    router.put(
      '/user/videos/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('update/video'),
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
