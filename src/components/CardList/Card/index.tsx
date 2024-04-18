import { TimeData } from "@/schemas/times.schema";
import styles from "./styles.module.scss";
import dot from "../../../assets/img/Group 2.png";
import Image from "next/image";

interface CardProps {
  time: TimeData;
}

export const Card = ({ time }: CardProps) => {
  return (
    <div className={styles[`${time.title}`]}>
      oi
      <li className={styles.container}>
        <div className={styles.box_title}>
          {time.title == "Self" ? (
            <h3>{time.title} Care</h3>
          ) : (
            <h3>{time.title}</h3>
          )}
          <Image src={dot} alt="..." />
        </div>
        <div className={styles.box_hour}>
          <p>{time.timeframes.weekly.current}hrs</p>
        </div>
        <div className={styles.box_time}>
          <p>Last Week - {time.timeframes.weekly.previous}hrs</p>
        </div>
      </li>
    </div>
  );
};
