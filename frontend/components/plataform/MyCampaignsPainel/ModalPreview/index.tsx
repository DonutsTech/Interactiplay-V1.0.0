'use client';

import { useEffect, useState } from 'react';
import styles from './ModalPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSquarePen, faSun } from '@fortawesome/free-solid-svg-icons';
import { ICampaign } from '@/@types/campaign';
import { IoCloseCircle } from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
import Embed from '../../Embed';

interface IProps {
  onClose: () => void;
  onEdit: () => void;
  campaign: ICampaign;
}

const ModalPreview = ({ onClose, onEdit, campaign }: IProps) => {
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className={styles.modalPreview}>
      <div className={styles.modalPreview_overlay} onClick={onClose} />
      <div
        className={styles.modalPreview_content}
        style={{
          backgroundColor: isToggled ? '#f2f2f2' : '#000125',
        }}
      >
        <div className={styles.header}>
          <p
            className={styles.header_title}
            style={{
              color: isToggled ? '#000125' : '#f2f2f2',
            }}
          >
            {campaign.NAME}
          </p>
          <div className={styles.header_right}>
            <div className={styles.header_right_mode}>
              <FontAwesomeIcon
                icon={faMoon}
                style={{
                  color: isToggled ? '#000125' : '#f2f2f2',
                }}
              />
              <div className={styles.toggle_box}>
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    id="toggle"
                    className={styles.toggle_input}
                    checked={isToggled}
                    onChange={(e) => {
                      // console.log('Toggle changed:', e.target.checked);
                      setIsToggled(e.target.checked);
                    }}
                  />
                  <span />
                </label>
              </div>
              <FontAwesomeIcon
                icon={faSun}
                style={{
                  color: isToggled ? '#000125' : '#f2f2f2',
                }}
              />
            </div>
            <button
              className={styles.editButton}
              title="Editar campanha"
              onClick={onEdit}
                style={{
                  color: isToggled ? '#000125' : '#f2f2f2',
                }}
            >
              <RiEditCircleFill />
              
            </button>
            <button
              className={styles.closeButton}
              onClick={onClose}
              title="Fechar visualização"
              style={{
                color: isToggled ? '#000125' : '#f2f2f2',
              }}
            >
              <IoCloseCircle />
            </button>
          </div>
        </div>
        <div className={styles.view}>
          <Embed campaing={campaign} />
        </div>
      </div>
    </div>
  );
};

export default ModalPreview;
