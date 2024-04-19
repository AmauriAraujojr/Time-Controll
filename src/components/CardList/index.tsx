import styles from "./styles.module.scss";
import { TimeData } from "@/schemas/times.schema";
import { Card } from "./Card";
import { CardProfile } from "./CardProfile";

interface IListProps {
  times: TimeData[];
}

export const CardList = ({ times }: IListProps) => {
  return (
    <section className={styles.container}>
      <CardProfile/>
        <ul className={styles.parent}>
        {times.map((time: TimeData, index) => {
          return <Card key={index} time={time} />;
        })}
      </ul>
    </section>
  );
};
