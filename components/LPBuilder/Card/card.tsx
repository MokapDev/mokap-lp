import LPBuilder from "..";
import styles from "./card.module.css";

interface ICard {
  title: string;
  description: string;
}

export const Card = ({ title, description }: ICard) => {
  return (
    <div className={styles.card}>
      <LPBuilder.Text type="subtitle">{title}</LPBuilder.Text>
      <LPBuilder.Separator />
      <LPBuilder.Text>{description}</LPBuilder.Text>
    </div>
  );
};
