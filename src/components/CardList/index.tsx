import styles from "./styles.module.scss";
import { TimeData } from "@/schemas/times.schema";
import { Card } from "./Card";
import { CardProfile } from "./CardProfile";
import { useState } from "react";

interface IListProps {
  times: TimeData[];
}

export const CardList = ({ times }: IListProps) => {

const [renderTime,setRenderTime] =useState("weekly")
  return (
    <section className={styles.container}>
      <CardProfile setRenderTime={setRenderTime}/>
        <ul className={styles.parent}>
        {times.map((time: TimeData, index) => {
          return <Card key={index} time={time} renderTime={renderTime} />;
        })}
      </ul>
    </section>
  );
};
