import type { Router } from 'express';
import { mailController } from '../../controllers/mail';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
import { imageMemory } from '../../config/multerConfig';

class MailRouter {
  public static create(router: Router): void {
    router.post('/send-email-contact', schemaValidator('mail/create'), mailController.postSendEmailContact);
    router.post('/send-email-sup',  isAuthenticateTokenDb, isValidateUserPlan, imageMemory.array('PHOTOS'), schemaValidator('mail/create'), mailController.postSendEmailPhotoUser);
  }
}

export default MailRouter;
