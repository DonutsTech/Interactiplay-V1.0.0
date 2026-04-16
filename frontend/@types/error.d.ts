import { MeResponse } from './auth';
import { ToastOptions } from 'react-toastify';

export interface ErrorMessage {
  STATUS: number;
  MESSAGE: string;
  DATA?: MeResponse['USER'] | null;
  PORTAL?: string; // URL do portal de renovação (usado em status 402)
  USER?: MeResponse['USER']; // Dados do usuário (usado em alguns erros)
}

/**
 * @deprecated Use toast via ErrorContext (useError hook) ao invés de ErrorModal
 * Mantido para compatibilidade com componentes que ainda não foram migrados
 */
export interface ErrorModalState {
  mensagem: string;
  type: 'error' | 'success' | 'warning';
  statusCode?: number;
  btn?: boolean;
  butonProps?: {
    text: string;
    goClick: () => void;
    disabled?: boolean;
  };
  onClose?: () => void;
}

export interface ShowToastOptions extends ToastOptions {
  autoClose?: number | false;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  action?: {
    text: string;
    onClick: () => void;
  };
}

/**
 * Opções para showConfirmation do ErrorContext
 */
export interface ConfirmOptions {
  /** Título da confirmação (opcional) */
  title?: string;
  /** Tipo de toast (padrão: 'warning') */
  type?: 'warning' | 'info' | 'error';
  /** Texto do botão de confirmar (padrão: 'Confirmar') */
  confirmText?: string;
  /** Texto do botão de cancelar (padrão: 'Cancelar') */
  cancelText?: string;
  /** Tempo de auto-close em ms (padrão: false - não fecha automaticamente) */
  autoClose?: number | false;
  /** Callback executado ao confirmar */
  onConfirm?: () => void;
  /** Callback executado ao cancelar */
  onCancel?: () => void;
}

/**
 * Opções para handleRequest do ErrorContext
 */
export interface HandleRequestOptions {
  suppressErrorToast?: boolean;
  suppressLoading?: boolean;
  successMessage?: string;
  successToastOptions?: ShowToastOptions;
  errorToastOptions?: ShowToastOptions;
  onSuccess?: () => void;
  onError?: (error: ErrorMessage) => void;
}
