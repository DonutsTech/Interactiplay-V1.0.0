export interface validateEmail {
  EMAIL: string;
  TOKEN: string;
}

export interface ForgetPassword {
  EMAIL: string;
  TOKEN: string;
  CODE: string;
}

export interface MailPages {
  EMAIL: string;
  NAME: string;
  PHONE: string;
  MESSAGE: string;
}

export interface Notice {
  EMAIL: string;
  NAME: string;
}
