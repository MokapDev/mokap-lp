import styles from "./separator.module.css";

interface ISeparator {
  withLine?: boolean;
}

export const Separator = ({ withLine }: ISeparator) => {
  return <div className={withLine ? styles.separatorWithLine : styles.separator} />;
};
