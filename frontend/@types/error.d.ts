import { MeResponse } from "./auth";

export interface ErrorMessage {
  STATUS: number;
  MESSAGE: string;
  DATA?: MeResponse['USER'] | null;
}


export interface ErrorModalState {
  mensagem: string;
  type: 'error' | 'success' | 'warning';
  statusCode?: number;
  butonProps?: {
    text: string;
    goClick: () => void;
    disabled?: boolean;
  };
  onClose?: () => void;
};