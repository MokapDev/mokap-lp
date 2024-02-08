import styles from "./image.module.css";

interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Image = ({ src, alt, width = 250, height = 250 }: IImage) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
