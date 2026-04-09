import Formulario from '@/components/globals/Formulario';
import styles from './Contact.module.scss';
import Link from 'next/link';
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from 'react-icons/ri';

const iconsProps = {
  size: 48,
  color: '#f2f2f2',
};

const Contact = () => {
  return (
    <section
      className={styles.contact}
      id="contact"
      aria-label="Seção de Contato"
      data-scroll-behavior="smooth"
    >
      <div className={styles.contact_container}>
        <div className={styles.contact_container_left}>
          <h2>Pronto para transformar suas campanhas?</h2>
          <p>
            Preencha o formulário e descubra como a InteractiPlay revoluciona suas campanhas em vídeo com um atendimento humanizado.
          </p>
          <div className={styles.contact_container_left_redes}>
            <Link
              href={'https://www.instagram.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da InteractiPlay"
              className={`${styles.contact_container_left_redes_link} ${styles.instagram}`}
            >
              <RiInstagramFill {...iconsProps} />
            </Link>
            <Link
              href={'https://www.linkedin.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da InteractiPlay"
              className={`${styles.contact_container_left_redes_link} ${styles.linkedin}`}
            >
              <RiLinkedinBoxFill {...iconsProps} />
            </Link>
            <Link
              href={'https://www.youtube.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube da InteractiPlay"
              className={`${styles.contact_container_left_redes_link} ${styles.youtube}`}
            >
              <RiYoutubeFill {...iconsProps} />
            </Link>
          </div>
        </div>
        <div className={styles.contact_container_right}>
          <Formulario />
        </div>
      </div>
    </section>
  );
};

export default Contact;
