import Image from "next/image";
import styles from "./header.module.css";

type TLink = {
  title: string;
  href: string;
}

interface IHeader {
  logoSrc: string;
  logoAlt: string;
  links: TLink[];
}

export const Header = ({ logoSrc, logoAlt, links }: IHeader) => {
  return (
    <header className={styles.header}>
      <Image src={logoSrc} alt={logoAlt} width={200} height={32} />
      <div className={styles.links}>
        {links.map((link, index) => (
          <a href={link.href} key={index}>{link.title}</a>
        ))}
      </div>
    </header>
  );
};
