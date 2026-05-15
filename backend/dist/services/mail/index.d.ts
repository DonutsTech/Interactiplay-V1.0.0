import type { ForgetPassword, validateEmail } from "../../@types/interface/mail";
declare class MailService {
    sendValidateEmail({ EMAIL, TOKEN }: validateEmail): Promise<boolean>;
    sendForgetPasswordEmail({ CODE, EMAIL, TOKEN }: ForgetPassword): Promise<boolean>;
    sendResetPasswordEmail(email: string): Promise<boolean>;
}
export declare const mailService: MailService;
export {};
//# sourceMappingURL=index.d.ts.map