import style from "@/app/style.module.css";
import { transform } from "next/dist/build/swc";
import { Winky_Rough } from "next/font/google";

const winkyRough = Winky_Rough({
  weight:'400',
  subsets:['latin']
})
export default function AboutMe() {

  return (
    <div className={`${style.section} ${style.aboutMe}`}>
      <h1 className={`${style.sectionHeading} ${winkyRough.className}`}>About me</h1>
        <p className={style.aboutMeParagraph}>
          I graduated with an <u><i style={{fontSize:'1.15rem'}}>Applied Computer Science Degree</i></u><span> </span>
          at <b>Dalhousie University</b> in Canada and have hands‑on experience building and shipping full‑stack web and mobile
          applications using React JS, Java, SQL and no-SQL Databases. I am
          skilled in debugging, improving existing systems, and collaborating across technical and
          non‑technical teams. Known for ownership, curiosity, and delivering outcomes through 
          AI‑enabled projects and continuous self‑directed learning. 
        </p> 
    </div>
  )
}