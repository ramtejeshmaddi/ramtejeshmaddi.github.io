import style from "@/app/style.module.css";

import { Jockey_One } from "next/font/google";
const JockeyOne = Jockey_One({
    weight:"400",
    subsets:['latin']

})
export default function SubHeading() {
  return(
    <div className={style.zoom}>
      <p className={`${style.subHeading} ${JockeyOne.className}`}>" Junior Software Developer creating Apps, Websites and exploring new Tech. "</p>
    </div>
  )
}