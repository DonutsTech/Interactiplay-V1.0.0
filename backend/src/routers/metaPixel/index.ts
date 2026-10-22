import type { Router } from 'express';
import { metaPixelController } from '../../controllers/metaPixel';

class MetaPixelRouter {
  public static create(router: Router): void {
    router.post(
      '/meta-pixel',
      metaPixelController.trackEvent
     )
  }
}

export default MetaPixelRouter;
