import { CardList } from "@/components/CardList";
import { Rubik } from "next/font/google";

const rubik = Rubik({ 
  weight:["300","400","500","600"],
  subsets: ["latin"] });

export default function Home() {
  return (
    <div className={rubik.className}>
    <CardList/>
     
    </div>
  );
}
