'use client';

import Image from 'next/image';
import styles from './Ajuda.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useError } from '@/context/ErrorContext';
import BtnG from '../../BtnG';
import { sendEmailSup } from '@/service/externalLink/sendEmailSup';


interface IMsgPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  images: File[];
}


const Ajuda = () => {

  const { authUser } = useContext(AuthUserContext);
  const { handleRequest, isLoading } = useError();
  const [href, setHref] = useState<string>('');

  if (!authUser) {
    return null;
  }

  const [msgPayload, setMsgPayload] = useState<IMsgPayload>({
    name: authUser.USER.NAME,
    email: authUser.USER.EMAIL,
    phone: authUser.USER.PHONE,
    message: '',
    images: []
  });

  const fileInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      if (event.clipboardData) {
        const items = event.clipboardData.items;
        const files: File[] = [];
        for (let i = 0; i < items.length; i++) {
          if (items[i].kind === 'file') {
            const file = items[i].getAsFile();
            if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
              files.push(file);
            }
          }
        }
        if (files.length > 0) {
          setMsgPayload(prev => ({ ...prev, images: [...prev.images, ...files] }));
        }
      }
    };
    const textarea = document.getElementById('ajuda-message-textarea');
    if (textarea) textarea.addEventListener('paste', handlePaste as any);
    if (fileInputRef.current) fileInputRef.current.addEventListener('paste', handlePaste as any);
    return () => {
      if (textarea) textarea.removeEventListener('paste', handlePaste as any);
      if (fileInputRef.current) fileInputRef.current.removeEventListener('paste', handlePaste as any);
    };
  }, []);

  useEffect(() => {
    if (authUser) {
      setHref(`https://wa.me/553491449810?text=Olá!%20Meu%20nome%20é%20${encodeURIComponent((authUser.USER.NAME).split(' ')[0])}.%20e%20Gostaria%20de%20uma%20ajuda%20sobre%20a%20plataforma%20Interactiplay.`);
    };
  }, [authUser]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRequest(
      () => sendEmailSup({
        EMAIL: msgPayload.email,
        NAME: msgPayload.name,
        PHONE: msgPayload.phone,
        MESSAGE: msgPayload.message,
        PHOTOS: msgPayload.images,
      }),
      {
        loadingMessage: 'Enviando mensagem...',
        successMessage: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
        errorToastOptions: { autoClose: 7000 },
        onSuccess: () => {
          setMsgPayload({
            name: authUser.USER.NAME,
            email: authUser.USER.EMAIL,
            phone: authUser.USER.PHONE,
            message: '',
            images: []
          });
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4>
          Dúvidas? <br /> Vamos transformar sua ideia em interação!
        </h4>
        <Image src={logo} alt="Logo Interactiplay" width={200} />
        <div className={styles.helper}>
          <p>Confira a nossa seção de perguntas Frequentes:</p>
          <Link
            href="https://interactiplay.tawk.help/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.helperLink}
            title="Acessar seção de perguntas frequentes"
          >
            Acesse aqui <FaArrowRightLong className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.whats}>
          <p>Ou se preferir, fale com a gente no WhatsApp:</p>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsLink}
            title="Mandar mensagem no whatsapp"
          >
            Enviar a mensagem <IoLogoWhatsapp className={styles.whatsIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.title}>Algo que podemos melhorar? <br /> Nos avise!</p>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.formGroup} ${styles.image}`}>
            <input
              type="file"
              id="image"
              accept=".jpeg, .png"
              placeholder="Imagem do erro"
              ref={fileInputRef}
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setMsgPayload(prev => ({ ...prev, images: [...prev.images, ...Array.from(files)] }));
                }
              }}
              multiple
              disabled={isLoading}
            />
          </div>
          <div className={`${styles.formGroup} ${styles.message}`}>
            <textarea
              id="ajuda-message-textarea"
              placeholder="Descreva aqui, você pode também incluir imagens, basta colar."
              value={msgPayload.message}
              onChange={(e) => setMsgPayload({ ...msgPayload, message: e.target.value })}
              disabled={isLoading}
            />
          </div>
          {msgPayload.message.length > 0 && (
            <span className={styles.info}>Você pode tabem colar imagens diretamente na descrição.</span>
          )}
          <div className={styles.listImages}>
            {msgPayload.images.length > 0 && <p>Imagens selecionadas:</p>}
            <ul>
              {msgPayload.images.map((file, index) => (
                <li className={styles.listImages_item} key={index}>
                  <p>{file.name}</p>
                  <span
                    title="Remover imagem"
                    className={styles.remove}
                    onClick={() => {
                      setMsgPayload(prev => ({
                        ...prev,
                        images: prev.images.filter((_, i) => i !== index)
                      }))
                    }}
                  ><FaTrashAlt /></span>
                </li>
              ))}
            </ul>
          </div>
          <BtnG
            type="submit"
            text={isLoading ? "Enviando..." : "Enviar"}
            disabled={msgPayload.message.trim().length < 3 || isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default Ajuda;
