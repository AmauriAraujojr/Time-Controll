import { TimeData} from "@/schemas/times.schema";
import styles from "./styles.module.scss";

interface CardProps{
  time:TimeData
}

export const Card = (time:CardProps) => {
  return (
    <li className={styles.container}>
      <div> 
        <h3>{time.time.title}</h3>
      </div>
      <p>{time.time.timeframes.weekly.current}hrs</p>
      <div>
        <p>Last Week</p>
        <p>{time.time.timeframes.weekly.previous}hrs</p>
      </div>
    </li>
  );
};
