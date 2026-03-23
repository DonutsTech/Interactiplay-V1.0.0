export interface Login {
  EMAIL: string;
  HASHED_PASSWORD: string;
}

export interface Register extends Login {
  NAME: string;
  PHONE: string;
}
