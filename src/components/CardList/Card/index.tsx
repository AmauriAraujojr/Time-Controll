import { TimeData } from "@/schemas/times.schema";
import styles from "./styles.module.scss";
import dot from "../../../assets/img/icon-ellipsis.svg";
import Image from "next/image";
import workIcon from "../../../assets/img/icon-work.svg";
import playIcon from "../../../assets/img/icon-play.svg";
import sutdyIcon from "../../../assets/img/icon-study.svg";
import exerciceIcon from "../../../assets/img/icon-exercise.svg";
import socialIcon from "../../../assets/img/icon-social.svg";
import selfIcon from "../../../assets/img/icon-self-care.svg";
import { symbol } from "zod";

interface CardProps {
  time: TimeData;
  renderTime: string;
}

export const Card = ({ time, renderTime }: CardProps) => {
  return (
    <li className={styles[`${time.title}`]} id={styles.box}>
      {time.title == "Work" ? (
        <Image className={styles.icon} src={workIcon} alt="work" />
      ) : null}
      {time.title == "Play" ? (
        <Image className={styles.icon} src={playIcon} alt="play" />
      ) : null}
      {time.title == "Study" ? (
        <Image className={styles.icon} src={sutdyIcon} alt="study" />
      ) : null}
      {time.title == "Exercise" ? (
        <Image className={styles.icon} src={exerciceIcon} alt="exercise" />
      ) : null}
      {time.title == "Social" ? (
        <Image className={styles.icon} src={socialIcon} alt="social" />
      ) : null}
      {time.title == "Self" ? (
        <Image className={styles.icon} src={selfIcon} alt="self" />
      ) : null}

      <div className={styles.container}>
        <div className={styles.box_title}>
          {time.title == "Self" ? (
            <h3>{time.title} Care</h3>
          ) : (
            <h3>{time.title}</h3>
          )}
          <Image src={dot} alt="..." />
        </div>

        <div className={styles.box_hour}>
          {renderTime === "weekly" ? (
            <>
              <p className={styles.time}>{time.timeframes.weekly.current}hrs</p>
              <p className={styles.last}>
                Last Week - {time.timeframes.weekly.previous}hrs
              </p>
            </>
          ) : null}

          {renderTime === "daily" ? (
            <>
              <p className={styles.time}>{time.timeframes.daily.current}hrs</p>
              <p className={styles.last}>
                Yesterday - {time.timeframes.daily.previous}hrs
              </p>
            </>
          ) : null}

          {renderTime === "monthly" ? (
            <>
              <p className={styles.time}>
                {time.timeframes.monthly.current}hrs
              </p>
              <p className={styles.last}>
                Last Month - {time.timeframes.monthly.previous}hrs
              </p>
            </>
          ) : null}
        </div>
      </div>
    </li>
  );
};
