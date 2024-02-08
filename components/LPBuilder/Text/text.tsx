import styles from "./text.module.css";

interface IText {
  children: React.ReactNode;
  type?: 'title' | 'subtitle' | 'text' | 'microtext';
  lightText?: boolean;
}

export const Text = ({ children, type = 'text', lightText = false }: IText) => {
  const colorMode = lightText ? 'Light' : 'Dark'
  const textStyle = styles[`${type}${colorMode}`];
  return <p className={textStyle}>{children}</p>;
};
