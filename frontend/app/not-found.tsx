import Image from 'next/image';
import styles from './404.module.scss';
import numero from '@/assets/images/404.png';
import logo from '@/assets/images/logo_white_dg.svg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.media}>
        <div className={styles.color} />
        <div className={styles.ajuste_box}>
          <div className={styles.ajuste} />
        </div>
        <video
          autoPlay
          loop
          muted
          className={styles.media_video}
          playsInline
          preload="metadata"
        >
          <source src="/media/videos/Monstrinho_no0.mp4" type="video/mp4" />
        </video>
        <Image
          src={numero}
          alt="Número 404"
          className={styles.media_image}
          loading="eager"
          draggable={false}
        />
      </div>
      <div className={styles.conteudo}>
        <Link className={styles.logo_link} href="/">
          <Image
            src={logo}
            alt="Logo da interactiplay"
            loading="eager"
            draggable={false}
            className={styles.logo}
          />
        </Link>
        <div className={styles.error} data-text="Error">
          Error
        </div>

        <div className={styles.retorno}>
          <h1 className={styles.titulo}>Ops! Página Não Encontrada</h1>
          <p className={styles.texto}>
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link className={styles.botao} type="button" href="/">
            <FontAwesomeIcon icon={faHome} className={styles.botao_icone} />
            Voltar para casa!
          </Link>
        </div>
      </div>
    </div>
  );
}
