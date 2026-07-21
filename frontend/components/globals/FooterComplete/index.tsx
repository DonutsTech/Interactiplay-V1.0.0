"use client";

import logoInteracti from "@/assets/images/logo_white_dg.svg";
import { useIsMobile } from "@/context/isMobileContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./FooterComplete.module.scss";

import { IoLogoWhatsapp } from "react-icons/io";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink extends FooterLink {
  imgIcon: React.ReactNode;
  className: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const FooterComplete = () => {
  const pagesLinks: FooterLink[] = [
    { label: "Início", href: "/#hero" },
    { label: "Recursos", href: "/#features" },
    { label: "Preços", href: "/#plan" },
    { label: "Contato", href: "/#contact" },
  ];

  const { width } = useIsMobile();

  const iconsProps = {
    size: width && width < 768 ? 20 : 40,
    color: "#f2f2f2",
  };

  const platformLinks: FooterLink[] = [
    {
      label: "Planos",
      href: "/#plan",
    },
    {
      label: "Cadastre-se",
      href: "/acess/cadastro",
    },
    {
      label: "Login",
      href: "/acess/login",
    },
  ];

  const aboutLinks: FooterLink[] = [
    { label: "Política de uso", href: "/Policy" },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/interactiplay/",
      className: styles.social_icon_link_instagram,
      imgIcon: <RiInstagramFill {...iconsProps} className={styles.icon} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/interactiplay/",
      className: styles.social_icon_link_linkedin,
      imgIcon: <RiLinkedinBoxFill {...iconsProps} className={styles.icon} />,
    },
    {
      label: "Youtube",
      href: "https://www.youtube.com/@interactiplayhq",
      className: styles.social_icon_link_youtube,
      imgIcon: <RiYoutubeFill {...iconsProps} className={styles.icon} />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/553491449810?text=Olá!%20Gostaria%20de%20tirar%20minhas%20dúvidas%20sobre%20a%20Interactiplay.",
      className: styles.social_icon_link_whatsapp,
      imgIcon: <IoLogoWhatsapp {...iconsProps} className={styles.icon} />,
    },
  ];

  const sections: FooterSection[] = [
    { title: "Páginas", links: pagesLinks },
    { title: "Plataforma", links: platformLinks },
    { title: "Sobre", links: aboutLinks },
  ];

  return (
    <footer className={styles.footer} aria-label="Rodapé do site Interactiplay">
      <div className={styles.footer_content_wrapper}>
        <div className={styles.footer_brand}>
          <div className={styles.footer_logo}>
            <Image
              src={logoInteracti}
              alt="Logo da Interactiplay"
              draggable={false}
              loading="lazy"
            />
          </div>
          <p className={styles.footer_description}>
            Plataforma de hospedagem de vídeos interativos de vendas.
          </p>
        </div>
        {sections.map((section, index) => (
          <div className={styles.footer_section} key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={`${styles.footer_section} ${styles.footer_social}`}>
          <h3>Redes Sociais</h3>
          <div className={styles.social_icons}>
            {socialLinks.map((link, index) => (
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                aria-label={link.label}
                title={`Acessar ${link.label}`}
                className={`${styles.social_icon_link} ${link.className}`}
              >
                {link.imgIcon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p>&copy;InteractiPlay - 2025 -Todos os direitos reservados</p>
        <a
          title="Acessar site da DonutsTech"
          target="__blank"
          href="https://www.donutstech.com.br/"
        >
          <p className={styles.footer_copyright_donuts}>
            Feito com amor e açucar - DonutsTech{" "}
            <Image
              src={"/media/icons/donutstechIcon.png"}
              alt="Logo"
              width={24}
              height={19}
              className={styles.footer_copyright_donuts_img}
              draggable={false}
              loading="lazy"
            />
          </p>
        </a>
      </div>
    </footer>
  );
};

export default FooterComplete;
