import styles from "./section.module.css";

interface ISection {
  children: React.ReactNode;
  id: string;
  dark?: boolean;
}

export const Section = ({ children, id, dark }: ISection) => {
  return (
    <section className={dark ? styles.darkSection : styles.section} id={id}>
      {children}
    </section>
  );
};
