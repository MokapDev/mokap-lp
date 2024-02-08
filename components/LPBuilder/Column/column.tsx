import styles from "./column.module.css";

interface IColumn {
  children: React.ReactNode;
}

export const Column = ({ children }: IColumn) => {
  return <div className={styles.column}>{children}</div>;
};
