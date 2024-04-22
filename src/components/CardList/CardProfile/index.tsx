import styles from "./styles.module.scss";
import avatar from "../../../assets/img/image-jeremy.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface CardProfileProps {
  setRenderTime: Dispatch<SetStateAction<string>>;
}

export const CardProfile = ({ setRenderTime }: CardProfileProps) => {
  return (
    <div className={styles.box_principal}>
      <div className={styles.box_profile}>
        <div className={styles.box_img}>
          <Image src={avatar} alt="user" />
        </div>
        <div className={styles.content}>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className={styles.choices}>
        <p onClick={() => setRenderTime("daily")}>Daily</p>
        <p onClick={() => setRenderTime("weekly")}>Weekly</p>
        <p onClick={() => setRenderTime("monthly")}>Monthly</p>
      </div>
    </div>
  );
};
