import { ConfirmOptions, ShowToastOptions } from '@/@types/error';
import { HandleRequestOptions } from '@/context/ErrorContext';
import { TypeOptions } from 'react-toastify';
import { AnimatedLogo } from '../../AnimateLogo';

interface ShowToastProps {
  typeError: 'toast' | 'confirmation' | 'requestError';
  message?: string;
  optionsToast?: ShowToastOptions;
  optionsConfirmation?: ConfirmOptions;
  optionsRequest?: HandleRequestOptions;
  type?: TypeOptions;
  toast?: () => void;
  handleCancel?: () => void;
  handleConfirm?: () => void;
}

const ShowToast = ({
  typeError,
  message = '',
  optionsToast = {},
  optionsConfirmation = {},
  optionsRequest = {},
  type = 'default',
  toast = () => {},
  handleCancel = () => {},
  handleConfirm = () => {},
}: ShowToastProps) => {
  if (typeError === 'toast') {
    const options = optionsToast as ShowToastOptions;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span>{message}</span>
        {options.action && (
          <button
            onClick={() => {
              options.action?.onClick();
              toast();
            }}
            style={{
              padding: '6px 12px',
              background: '#353AA4',
              border: 'none',
              borderRadius: '4px',
              color: '#F2F2F2',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {options.action.text}
          </button>
        )}
      </div>
    );
  }

  if (typeError === 'confirmation') {
    const {
      title,
      cancelText = 'Cancelar',
      confirmText = 'Confirmar',
    } = optionsConfirmation as ConfirmOptions;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          color: '#F2F2F2',
        }}
      >
        {title && (
          <strong
            style={{
              fontSize: '14px',
              marginBottom: '4px',
              color: '#00FFF1',
            }}
          >
            {title}
          </strong>
        )}
        <span style={{ fontSize: '14px', lineHeight: '1.5' }}>{message}</span>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '8px',
            justifyContent: 'flex-end',
          }}
        >
          {cancelText && cancelText.trim() !== '' && (
            <button
              onClick={() => {
                handleCancel();
                toast();
              }}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                border: '2px solid #606060',
                borderRadius: '6px',
                color: '#F2F2F2',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#606060';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={() => {
              handleConfirm();
              toast();
            }}
            style={{
              padding: '8px 16px',
              background:
                type === 'error'
                  ? '#C72C41'
                  : type === 'warning'
                    ? '#FFCE08'
                    : '#0CB189',
              border: 'none',
              borderRadius: '6px',
              color: type === 'warning' ? '#1A2228' : '#F2F2F2',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    );
  }

  if (typeError === 'requestError') {
    const { loadingMessage = 'Carregando...' } =
      optionsRequest as HandleRequestOptions;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: '#F2F2F2',
        }}
      >
        <AnimatedLogo size={32} />
        <span>{loadingMessage}</span>
      </div>
    );
  }

  return null;
};

export default ShowToast;
