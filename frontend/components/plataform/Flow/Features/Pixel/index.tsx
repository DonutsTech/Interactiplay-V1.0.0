'use client';

import { useState } from 'react';
import styles from './Pixel.module.scss';
import ToggleActive from '@/components/globals/ToggleActive';
import BtnG from '@/components/plataform/BtnG';
import { useError } from '@/context/ErrorContext';
import MetaLogo from '@/assets/icons/meta-logo.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

interface IPayloadPixel {
  nome: string;
  id: string;
}

export function Pixel() {
  const [pixelActive, setPixelActive] = useState(false);
  const { isLoading } = useError();
  const [pixelPayload, setPixelPayload] = useState<IPayloadPixel>({
    nome: '',
    id: '',
  });

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div
          className={`${styles.toggle} ${!pixelActive ? styles.toggle_solo : ''}`}
        >
          <ToggleActive
            active={pixelActive}
            onToggle={() => setPixelActive((prev) => !prev)}
          />
        </div>
        {pixelActive && (
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image src={MetaLogo} alt="Logo da Meta" height={50} />
            </div>
            <div className={styles.inputs}> 
              <div className={styles.nameBox}>
                <label htmlFor="pixelName">Nome do Pixel</label>
                <input 
                  type="text"
                  id="pixelName"
                  placeholder='De um nome para o seu pixel'
                  value={pixelPayload.nome}
                  onChange={(e) => setPixelPayload({ ...pixelPayload, nome: e.target.value })}
                />
              </div>
              <div className={styles.idBox}>
                <label htmlFor="pixelId"  title="O ID do Pixel pode ser encontrado no Gerenciador de Eventos da Meta.">
                  ID 
                  <FontAwesomeIcon icon={faCircleInfo}/>
                </label>
                <input 
                  type="text"
                  id="pixelId"
                  placeholder='Ex. 0123456789101112'
                  value={pixelPayload.id}
                  onChange={(e) => setPixelPayload({ ...pixelPayload, id: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}
        <div className={styles.actions}>
          <div className={`${styles.actions_btn} ${styles.actions_btn_save}`}>
            <BtnG
              text="Salvar"
              goClick={() => console.log('Salvar clicked')}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pixel;
