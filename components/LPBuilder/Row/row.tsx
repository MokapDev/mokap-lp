import styles from "./row.module.css";

interface IRow {
  children: React.ReactNode;
}

export const Row = ({ children }: IRow) => {
  return <div className={styles.row}>{children}</div>;
};
