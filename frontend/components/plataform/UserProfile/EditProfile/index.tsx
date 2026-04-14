'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { updateUserData } from '@/service/user';
import { phoneMask, validarCelularBRCompleto } from '@/utils/PhoneUtils';
import { STRING_RULES, validateString } from '@/utils/stringUtils';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import InputForm from '@/components/globals/InputForm';
import styles from '../UserProfile.module.scss';
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';
import { useIsLoading } from '@/context/IsLoadingContext';

interface EditProfileProps {
  onCancel: () => void;
}

const EditProfile = ({ onCancel }: EditProfileProps) => {
  const { authUser, loadAuthUser } = useContext(AuthUserContext);
  const [showModalMsg, setShowModalMsg] = useState(false);
  const [msgProp, setMsgProp] = useState<ErrorModalState>({
    mensagem: '',
    type: 'error',
  });

  const { setIsLoading, isLoading } = useIsLoading();

  const [formData, setFormData] = useState({
    NAME: authUser?.USER.NAME || '',
    PHONE: authUser?.USER.PHONE || '',
  });

  


  if (!authUser) {
    return <div className={styles.loading}>Carregando...</div>;
  }

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
        <h3 className={styles.title}>Editar Informações</h3>

        <form className={styles.form} onSubmit={() => {}}>
          <div className={styles.formGroup}>
            <label htmlFor="NAME" className={styles.label}>
              Nome Completo
            </label>
            <InputForm
              icon={faUser}
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.NAME}
              onChange={(e) =>
                setFormData({ ...formData, NAME: e.target.value })
              }
              maxLength={255}
              minLength={3}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="PHONE" className={styles.label}>
              Telefone
            </label>
            <InputForm
              icon={faPhone}
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.PHONE}
              onChange={(e) =>
                setFormData({ ...formData, PHONE: phoneMask(e.target.value) })
              }
              maxLength={15}
              inputMode="tel"
            />
          </div>

          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              ℹ️ O email não pode ser alterado. Para qualquer dúvida, entre em
              contato com o suporte.
            </p>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnCancel}
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
