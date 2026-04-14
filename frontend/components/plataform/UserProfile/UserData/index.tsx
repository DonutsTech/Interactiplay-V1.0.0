'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { useContext, useState } from 'react';
import { postForgotPassword } from '@/service/auth/forgotpassword';
import styles from '../UserProfile.module.scss';
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';

interface UserDataProps {
  onEditClick: () => void;
}

const UserData = ({ onEditClick }: UserDataProps) => {
  const { authUser } = useContext(AuthUserContext);
  const [showModalMsg, setShowModalMsg] = useState(false);
  const [msgProp, setMsgProp] = useState<ErrorModalState>({
    mensagem: '',
    type: 'success',
  });
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  if (!authUser) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  const profile = {
    NAME: authUser.USER.NAME,
    EMAIL: authUser.USER.EMAIL,
    PHONE: authUser.USER.PHONE,
    EMAIL_VALIDATED: authUser.USER.VALIDATION_EMAIL,
  };

  const handleResendValidationEmail = async () => {
    setIsLoadingEmail(true);

    try {
      const response = await postForgotPassword({ EMAIL: profile.EMAIL });

      if ('STATUS' in response && 'MESSAGE' in response) {
        setMsgProp({
          mensagem: response.MESSAGE,
          type: 'error',
        });
      } else {
        setMsgProp({
          mensagem:
            'Email de validação enviado com sucesso! Verifique sua caixa de entrada.',
          type: 'success',
        });
      }
      setShowModalMsg(true);
    } catch (error) {
      console.error('Erro ao reenviar email:', error);
      setMsgProp({
        mensagem: 'Erro ao enviar email. Tente novamente mais tarde.',
        type: 'error',
      });
      setShowModalMsg(true);
    } finally {
      setIsLoadingEmail(false);
    }
  };

  const handleResetPassword = async () => {
    setIsLoadingPassword(true);

    try {
      const response = await postForgotPassword({ EMAIL: profile.EMAIL });

      if ('STATUS' in response && 'MESSAGE' in response) {
        setMsgProp({
          mensagem: response.MESSAGE,
          type: 'error',
        });
      } else {
        setMsgProp({
          mensagem:
            'Email de recuperação enviado! Verifique sua caixa de entrada para redefinir sua senha.',
          type: 'success',
        });
      }
      setShowModalMsg(true);
    } catch (error) {
      console.error('Erro ao enviar email de recuperação:', error);
      setMsgProp({
        mensagem: 'Erro ao enviar email. Tente novamente mais tarde.',
        type: 'error',
      });
      setShowModalMsg(true);
    } finally {
      setIsLoadingPassword(false);
    }
  };

  return (
    <>
      {showModalMsg && (
        <ErrorModal
          isOpen={(show) => setShowModalMsg(show)}
          mensagem={msgProp.mensagem}
          type={msgProp.type}
          onClose={() => setShowModalMsg(false)}
        />
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Meus Dados</h3>
          <button className={styles.btnEdit} onClick={onEditClick}>
            ✏️ Editar
          </button>
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.field}>
            <h4 className={styles.field_label}>Nome</h4>
            <p className={styles.field_value}>{profile.NAME}</p>
          </div>

          <div className={styles.field}>
            <div className={styles.emailBox}>
              <div className={styles.emailBox_info}>
                <h4 className={styles.field_label}>Email</h4>
                <p className={styles.field_value}>{profile.EMAIL}</p>
                {profile.EMAIL_VALIDATED ? (
                  <span className={styles.badge_success}>✓ Verificado</span>
                ) : (
                  <span className={styles.badge_warning}>⚠ Não verificado</span>
                )}
              </div>
              {!profile.EMAIL_VALIDATED && (
                <button
                  className={styles.btnSecondary}
                  onClick={handleResendValidationEmail}
                  disabled={isLoadingEmail}
                >
                  {isLoadingEmail ? 'Enviando...' : 'Validar Email'}
                </button>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <h4 className={styles.field_label}>Telefone</h4>
            <p className={styles.field_value}>{profile.PHONE}</p>
          </div>

          <div className={styles.passwordSection}>
            <h4 className={styles.field_label}>Senha</h4>
            <p className={styles.field_description}>
              Deseja alterar sua senha? Clique no botão abaixo para receber um
              email de recuperação.
            </p>
            <button
              className={styles.btnSecondary}
              onClick={handleResetPassword}
              disabled={isLoadingPassword}
            >
              {isLoadingPassword ? 'Enviando...' : 'Redefinir Senha'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
