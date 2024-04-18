import { Rubik } from "next/font/google";
import { Card } from "@/components/Card";

const rubik = Rubik({ 
  weight:["300","400","500","600"],
  subsets: ["latin"] });

export default function Home() {
  return (
    <div className={rubik.className}>
    <Card/>
     
    </div>
  );
}
