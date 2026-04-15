import type { Router } from 'express';
import { videoController } from '../../controllers/video';

class VideoRouter {
  public static create(router: Router) {
    router.get('/user/videos', videoController.getVideosAllForUser);
    router.get('/user/videos/:id', videoController.getVideoByIdForUser);
    router.get('/videos', videoController.getVideosAll);
    router.get('/videos/:id', videoController.getVideoById);
    router.post('/user/videos', videoController.createVideoForUser);
    router.put('/user/videos/:id', videoController.putVideoForUser);
    router.delete('/user/videos/:id', videoController.deleteVideoForUser);
  }
}

export default VideoRouter;
