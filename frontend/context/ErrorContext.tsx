'use client';

import { ConfirmOptions, ErrorMessage } from '@/@types/error';
import { AnimatedLogo } from '@/components/globals/AnimateLogo';
import ShowToast from '@/components/globals/ErrorModal/ShowToast';
import { createContext, useCallback, useContext, useState } from 'react';
import { Id, toast, ToastOptions, TypeOptions } from 'react-toastify';

export interface HandleRequestOptions {
  suppressErrorToast?: boolean;
  suppressLoading?: boolean;
  suppressLoadingToast?: boolean;
  successMessage?: string;
  loadingMessage?: string;
  successToastOptions?: ToastOptions;
  errorToastOptions?: ToastOptions;
  onSuccess?: () => void;
  onError?: (error: ErrorMessage) => void | Promise<void>; // ATUALIZADO: Aceita Promise
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
 * Context interface
 */
interface ErrorContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showToast: (
    message: string,
    type?: TypeOptions,
    options?: ShowToastOptions
  ) => Id;
  showError: (error: ErrorMessage | string, options?: ShowToastOptions) => Id;
  showSuccess: (message: string, options?: ShowToastOptions) => Id;
  showWarning: (message: string, options?: ShowToastOptions) => Id;
  showInfo: (message: string, options?: ShowToastOptions) => Id;
  showConfirmation: (
    message: string,
    options?: ConfirmOptions
  ) => Promise<boolean>;
  handleRequest: <T>(
    requestFn: () => Promise<T>,
    options?: HandleRequestOptions
  ) => Promise<T | null>;
}

const ErrorContext = createContext<ErrorContextType>({
  isLoading: false,
  setIsLoading: () => {},
  showToast: () => '',
  showError: () => '',
  showSuccess: () => '',
  showWarning: () => '',
  showInfo: () => '',
  showConfirmation: async () => false,
  handleRequest: async () => null,
});

/**
 * Configurações padrão de toast por tipo
 */
const DEFAULT_TOAST_CONFIG: Record<TypeOptions, Partial<ToastOptions>> = {
  success: {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  },
  error: {
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  },
  warning: {
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  },
  info: {
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
  },
  default: {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  },
};

/**
 * Provider do ErrorContext
 */
export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showToast = useCallback(
    (
      message: string,
      type: TypeOptions = 'default',
      options?: ShowToastOptions
    ): Id => {
      const defaultConfig = DEFAULT_TOAST_CONFIG[type];
      // Se há ação customizada, não auto-fecha
      const finalOptions: ToastOptions = {
        ...defaultConfig,
        ...options,
        type,
        ...(options?.action && { autoClose: false }),
      };

      // Se há ação, adiciona botão customizado via closeButton
      if (options?.action) {
        let actionExecuted = false;

        const handleActionClick = () => {
          if (actionExecuted) return;
          actionExecuted = true;

          // Executa ação original
          options.action?.onClick();

          // DESATIVA loading após ação
          setIsLoading(false);
        };

        const handleToastClose = () => {
          // Se fechar sem executar ação, desativa loading
          if (!actionExecuted) {
            setIsLoading(false);
          }
        };

        const toastId = toast(
          <ShowToast
            typeError="toast"
            message={message}
            optionsToast={{
              ...finalOptions,
              action: {
                text: options.action.text,
                onClick: handleActionClick,
              },
            }}
            toast={() => toast.dismiss(toastId)}
          />,
          {
            ...finalOptions,
            onClose: handleToastClose,
          }
        );
        setIsLoading(true);
        return toastId;
      }

      return toast(message, finalOptions);
    },
    [setIsLoading]
  );

  /**
   * Exibe toast de erro (aceita ErrorMessage ou string)
   */
  const showError = useCallback(
    (error: ErrorMessage | string, options?: ShowToastOptions): Id => {
      let message: string;

      if (typeof error === 'string') {
        message = error;
      } else if (error && typeof error === 'object' && 'MESSAGE' in error) {
        message = error.MESSAGE;
      } else {
        message = 'Ocorreu um erro inesperado. Tente novamente.';
      }

      return showToast(message, 'error', options);
    },
    [showToast]
  );

  const showSuccess = useCallback(
    (message: string, options?: ShowToastOptions): Id => {
      return showToast(message, 'success', options);
    },
    [showToast]
  );

  /**
   * Exibe toast de warning
   */
  const showWarning = useCallback(
    (message: string, options?: ShowToastOptions): Id => {
      return showToast(message, 'warning', options);
    },
    [showToast]
  );

  /**
   * Exibe toast de info
   */
  const showInfo = useCallback(
    (message: string, options?: ShowToastOptions): Id => {
      return showToast(message, 'info', options);
    },
    [showToast]
  );

  /**
   * Exibe toast de confirmação com botões Confirmar/Cancelar
   *
   * IMPORTANTE: isLoading é ATIVADO automaticamente ao exibir o toast e
   * DESATIVADO ao confirmar/cancelar. Isso bloqueia novas solicitações
   * enquanto o usuário não tomar uma decisão.
   *
   * @param message - Mensagem da confirmação
   * @param options - Opções de customização
   * @returns Promise<boolean> - true se confirmado, false se cancelado
   *
   * @example
   * const confirmed = await showConfirmation(
   *   'Tem certeza que deseja excluir este item?',
   *   {
   *     title: 'Confirmar exclusão',
   *     confirmText: 'Sim, excluir',
   *     cancelText: 'Não, manter',
   *     type: 'warning'
   *   }
   * );
   * if (confirmed) {
   *   // Usuário confirmou (isLoading já foi desativado)
   * } else {
   *   // Usuário cancelou ou fechou toast (isLoading já foi desativado)
   * }
   */
  const showConfirmation = useCallback(
    (message: string, options?: ConfirmOptions): Promise<boolean> => {
      return new Promise((resolve) => {
        const {
          title,
          type = 'warning',
          confirmText = 'Confirmar',
          cancelText = 'Cancelar',
          autoClose = false,
          onConfirm,
          onCancel,
        } = options || {};

        setIsLoading(true);

        let resolved = false;

        const handleCancel = () => {
          if (resolved) return;
          resolved = true;
          onCancel?.();
          setIsLoading(false);
          resolve(false);
        };

        const handleConfirm = () => {
          if (resolved) return;
          resolved = true;
          onConfirm?.();
          setIsLoading(false);
          resolve(true);
        };

        const toastId = toast(
          <ShowToast
            typeError="confirmation"
            message={message}
            optionsConfirmation={{ title, confirmText, cancelText, type }}
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
            toast={() => toast.dismiss(toastId)}
          />,
          {
            type,
            autoClose,
            closeButton: true, // Permite fechar manualmente
            closeOnClick: false,
            draggable: false,
            icon: false,
            onClose: () => {
              // Se fechar o toast sem clicar em nada = cancelar
              handleCancel();
            },
          }
        );
      });
    },
    [setIsLoading]
  );

  /**
   * Wrapper para requisições com loading e error handling automáticos
   *
   * @param requestFn - Função async que retorna Promise com dados
   * @param options - Opções de configuração
   * @returns Dados em caso de sucesso, null em caso de erro
   *
   * @example
   * const data = await handleRequest(
   *   () => postLogin({ email, password }),
   *   { successMessage: 'Login realizado com sucesso!' }
   * );
   * if (data) {
   *   // Sucesso
   * }
   */
  const handleRequest = useCallback(
    async <T,>(
      requestFn: () => Promise<T>,
      options: HandleRequestOptions = {}
    ): Promise<T | null> => {
      const {
        suppressErrorToast = false,
        suppressLoading = false,
        suppressLoadingToast = false,
        successMessage,
        loadingMessage = 'Carregando...',
        successToastOptions,
        errorToastOptions,
        onSuccess,
        onError,
      } = options;

      let loadingToastId: Id | null = null;

      try {
        // Ativa loading
        if (!suppressLoading) {
          setIsLoading(true);
        }

        // Exibe toast de loading com AnimatedLogo
        if (!suppressLoadingToast) {
          loadingToastId = toast(
            <ShowToast
              typeError="requestError"
              optionsRequest={{ loadingMessage }}
            />,
            {
              autoClose: false,
              closeButton: false,
              draggable: false,
              closeOnClick: false,
              type: 'info',
              icon: false,
            }
          );
        }

        // Executa requisição
        const response = await requestFn();

        // Fecha toast de loading
        if (loadingToastId !== null) {
          toast.dismiss(loadingToastId);
        }

        // Verifica se resposta é ErrorMessage (padrão do backend)
        if (
          response &&
          typeof response === 'object' &&
          'STATUS' in response &&
          'MESSAGE' in response
        ) {
          const errorResponse = response as unknown as ErrorMessage;

          // É uma resposta de erro do backend
          if (!suppressErrorToast) {
            showError(errorResponse, errorToastOptions);
          }

          if (onError) {
            // ✅ AGUARDA onError completar (pode ser async com showConfirmation)
            await onError(errorResponse);
          }

          return null;
        }

        // Sucesso
        if (successMessage) {
          showSuccess(successMessage, successToastOptions);
        }

        if (onSuccess) {
          onSuccess();
        }

        return response;
      } catch (error: unknown) {
        // Fecha toast de loading em caso de erro
        if (loadingToastId !== null) {
          toast.dismiss(loadingToastId);
        }

        // Trata erro de exceção
        const errorMessage: ErrorMessage = {
          STATUS: 500,
          MESSAGE:
            error && typeof error === 'object' && 'MESSAGE' in error
              ? (error as ErrorMessage).MESSAGE
              : 'Ocorreu um erro inesperado. Tente novamente.',
        };

        if (!suppressErrorToast) {
          showError(errorMessage, errorToastOptions);
        }

        if (onError) {
          // ✅ AGUARDA onError completar (pode ser async com showConfirmation)
          await onError(errorMessage);
        }

        return null;
      } finally {
        // Desativa loading
        if (!suppressLoading) {
          setIsLoading(false);
        }
      }
    },
    [showError, showSuccess]
  );

  const value: ErrorContextType = {
    isLoading,
    setIsLoading,
    showToast,
    showError,
    showSuccess,
    showWarning,
    showInfo,
    showConfirmation,
    handleRequest,
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within ErrorProvider');
  }
  return context;
};

export const useIsLoading = () => {
  const { isLoading, setIsLoading } = useError();
  return { isLoading, setIsLoading };
};

export default ErrorContext;
