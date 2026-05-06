import Formulario from '@/components/globals/Formulario';
import styles from './Contact.module.scss';
import Link from 'next/link';
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';

const iconsProps = {
  size: 48,
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
            Preencha o formulário e descubra como a InteractiPlay revoluciona
            suas campanhas em vídeo com um atendimento humanizado.
          </p>
          <div className={styles.contact_container_left_redes}>
            <Link
              href={'https://www.instagram.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da InteractiPlay"
              title="Acesse o nosso Instagram"
              className={`${styles.contact_container_left_redes_link} ${styles.instagram}`}
            >
              <RiInstagramFill {...iconsProps} className={styles.icon}/>
            </Link>
            <Link
              href={'https://www.linkedin.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da InteractiPlay"
              title="Acesse o nosso LinkedIn"
              className={`${styles.contact_container_left_redes_link} ${styles.linkedin}`}
            >
              <RiLinkedinBoxFill {...iconsProps} className={styles.icon}/>
            </Link>
            <Link
              href={'https://www.youtube.com/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube da InteractiPlay"
              title="Acesse o nosso canal no YouTube"
              className={`${styles.contact_container_left_redes_link} ${styles.youtube}`}
            >
              <RiYoutubeFill {...iconsProps} className={styles.icon}/>
            </Link>
            <Link
              href={`https://wa.me/553491449810? text=Olá!%20Gostaria%20de%20tirar%20minhas%20dúvidas%20sobre%20a%20Interactiplay.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contact_container_left_redes_link} ${styles.whatsapp}`}
              title="Entrar em contato via WhatsApp"
            >
              <IoLogoWhatsapp {...iconsProps} className={styles.icon}/>
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
