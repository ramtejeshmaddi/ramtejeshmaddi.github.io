"use client"

import style from "@/app/style.module.css";

import { useState } from "react";

// component imports
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

export default function ResumeContainer() {
  "use client"
  const [displaySection, setDisplaySection] = useState("")
  return(
    <div className={style.resumeContainer}>
      <NavBar setDisplaySection={setDisplaySection}></NavBar>
      <div>
        { 
          displaySection=="AboutMe".toLowerCase()?<AboutMe></AboutMe>:
          //else
          displaySection=="WorkExperience".toLowerCase()?<WorkExperience></WorkExperience>:
          //else
          displaySection=="Projects".toLowerCase()?<Projects></Projects>:null
        }
      </div>


    </div>
  )
}