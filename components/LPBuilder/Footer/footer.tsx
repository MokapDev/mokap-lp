import Image from "next/image";
import styles from "./footer.module.css";

type TLink = {
  title: string;
  href: string;
}

interface IFooter {
  logoSrc: string;
  logoAlt: string;
  links: TLink[];
}

export const Footer = ({ logoSrc, logoAlt, links }: IFooter) => {
  return (
    <footer className={styles.footer}>
      <Image src={logoSrc} alt={logoAlt} width={200} height={32} />
      <div className={styles.links}>
        {links.map((link, index) => (
          <a href={link.href} key={index}>{link.title}</a>
        ))}
      </div>
    </footer>
  );
};
