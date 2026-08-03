import style from "@/app/style.module.css";

//component imports
import SubHeading from "./SubHeading";

//font
import { Winky_Rough } from "next/font/google";
const winkyRough = Winky_Rough({
  weight:'400',
  subsets:['latin']
})



export default function TitleSection() {
  return (
    <div className={`${style.titleContainer}`}>
      
      <img className={style.zoom} src={'./myImage_LowPoly.png'}></img>
      <div className={`${style.imgCircle} ${style.zoom}`}></div>

      <div className={style.nameContainer}>
        <p className={style.nameTopBar}></p>
        <p className={`${style.zoom} ${style.myName} ${winkyRough.className}`}>
          Ram Tejesh Reddy <span>Maddi</span>
        </p>
        

      </div>

      <SubHeading></SubHeading>

      <div className={style.skills}>
        <p className={style.skillZoom}>Web Development</p>
        <p className={style.skillZoom}>Full-stack</p>
        <p className={style.skillZoom}>Next JS</p>
        <p className={style.skillZoom}>React Native</p>
        <p className={style.skillZoom}>Android</p>
        <p className={style.skillZoom}>Game Dev</p>
        <p className={style.Seperator}> | </p>
        <p className={style.skillZoom}> Artificial Intelligence </p>
  
      </div>   
    </div>
  );
}