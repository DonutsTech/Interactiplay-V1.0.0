export interface LoginUser {
  EMAIL: string;
  HASHED_PASSWORD: string;
}

export interface RegisterUser extends LoginUser {
  NAME: string;
  PHONE: string;
}

export interface ResetPasswordUser {
  ID: string;
  HASHED_PASSWORD: string;
  CODE: string;
}
