import styles from "./styles.module.scss";
import avatar from "../../../assets/img/image-jeremy.png";
import Image from "next/image";

export const CardProfile = () => {
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

      <p>Daily</p>
      <p>Weekly</p>
      <p>Monthly</p>
</div>
    </div>
  );
};
