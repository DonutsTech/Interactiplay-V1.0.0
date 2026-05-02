'use client';

import styles from './Helper.module.scss';
import { MdLiveHelp } from 'react-icons/md';
import { IoCloseCircle } from 'react-icons/io5';
import { ReactNode, useState } from 'react';
import BtnG from '../BtnG';
import Tutorial from './Tutorial';
import Ajuda from './Ajuda';

interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

interface IStep {
  name: string;
  title: string;
  component?: ReactNode;
}

const Helper = ({ setOpen, open }: IProps) => {
  const [chose, setchose] = useState<number>(0);

  const steps: IStep[] = [
    {
      name: 'tutorial',
      title: 'Primeiros passos com a Interactiplay',
      component: <Tutorial />,
    },
    {
      name: 'help',
      title: 'Como podemos ajudar?',
      component: <Ajuda />,
    },
  ];

  return (
    <>
      <button
        className={styles.helperButton}
        onClick={() => {
          setOpen(true);
        }}
        title="Ajuda"
      >
        <MdLiveHelp />
      </button>

      {open && (
        <>
          <div
            className={styles.helperOverlay}
            onClick={() => setOpen(false)}
          />
          <div className={styles.helperContent}>
            <button
              className={styles.closeButton}
              onClick={() => {
                setOpen(false);
                setchose(0);
              }}
              title="Fechar ajuda"
            >
              <IoCloseCircle />
            </button>
            <div className={styles.header}>
              <p className={styles.header_title}>{steps[chose].title}</p>
            </div>
            <div className={styles.body}>
              {steps[chose].component}
            </div>

            <div className={styles.actions}>
              <div className={`${styles.btn} ${styles.btn_tutorial}`}>
                <BtnG 
                  text="Tutorial"
                  goClick={() => setchose(0)}
                  disabled={chose === 0}
                />
              </div>
              <div className={`${styles.btn} ${styles.btn_ajuda}`}>
                <BtnG 
                  text="Ajuda"
                  goClick={() => setchose(1)}
                  disabled={chose === 1}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Helper;
