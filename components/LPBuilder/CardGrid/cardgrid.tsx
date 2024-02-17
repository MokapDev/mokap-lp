import { Card } from "../Card/card";
import styles from "./cardgrid.module.css";

interface ICard {
  title: string;
  description: string;
}
interface ICardGrid {
  data: ICard[]
}

export const CardGrid = ({ data }: ICardGrid) => {
  return (
    <div className={styles.grid}>
    {data.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} />
    ))}
  </div>
  );
};
