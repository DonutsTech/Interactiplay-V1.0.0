import { MeResponse } from "./auth";

export interface ErrorMessage {
  STATUS: number;
  MESSAGE: string;
  DATA?: MeResponse['USER'] | null;
}
