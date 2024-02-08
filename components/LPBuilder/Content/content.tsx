import styles from "./content.module.css";

interface IContent {
  children: React.ReactNode;
}

export const Content = ({ children }: IContent) => {
  return <div className={styles.content}>{children}</div>;
};
