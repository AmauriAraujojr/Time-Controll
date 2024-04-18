import styles from "./styles.module.scss";
import { TimeData } from "@/schemas/times.schema";
import { Card } from "./Card";

interface IListProps{
  times:TimeData[]
}

export const CardList = ({times}:IListProps) => {

  return(
<section className={styles.container}>

    <ul className={styles.parent}>
        {
            times.map((time:TimeData,index)=>{
                return <Card key={index} time={time}/>
            })
        }
    </ul>
</section>
  
    
  )


};
