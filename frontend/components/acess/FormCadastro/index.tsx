'use client';

import ErrorModal from '@/components/globals/ErrorModal';
import styles from './styles.module.scss';
import { useState } from 'react';

const FormCadastro = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && 
      <ErrorModal 
      isOpen={setShowModal} 
      mensagem="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      type="error"
      />}
    </>
  );
};

export default FormCadastro;
