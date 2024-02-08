import styles from "./imagecontainer.module.css";

interface IImageContainer {
  children: React.ReactNode;
}

export const ImageContainer = ({ children }: IImageContainer) => {
  return <div className={styles.imageContainer}>{children}</div>;
};
