"use client"

import projects from "@/app/project.module.css";
import style from "@/app/style.module.css"
import { scale } from "motion";
import { nav } from "motion/react-client";

import { Winky_Rough } from "next/font/google";
import { useState } from "react";

type props = {
  setVisibleProjectType : React.Dispatch<React.SetStateAction<string>>,
  visibleProjectType : string

}

const winkyRough = Winky_Rough({weight:'400'})
let navElements = {
  fullStack:'full-stack',
  mobileApps:'Mobile Apps',
  gameDev:'Game Dev'
}

export default function Projects() {

  const [visibleProjectType, setVisibleProjectType] = useState('none')
  console.log(visibleProjectType)
  return(
    <div className={`${style.section} ${style.projects}`} >
      <h1 className={`${style.sectionHeading} ${winkyRough.className}`}> Projects </h1>
      <ProjectsNavBar setVisibleProjectType={setVisibleProjectType} visibleProjectType={visibleProjectType}></ProjectsNavBar>
      {
        visibleProjectType == navElements.fullStack ? <FullStack></FullStack>:
        visibleProjectType == navElements.mobileApps ? <MobileApplications></MobileApplications>:
        visibleProjectType == navElements.gameDev ? <GameDev></GameDev>:''
      }
    </div>
  )
}

function ProjectsNavBar(props:props){

  let transitionScale = 1.1
  let normalScale = 1
  let highLightColor = 'rgb(62, 180, 194)'
  let normalColor = 'white'

  return(
    <div className={projects.NavBar}>
      <p
        onClick={()=>{props.setVisibleProjectType(navElements.fullStack)}}
        style={{
          color:
            props.visibleProjectType == navElements.fullStack?
              highLightColor:'',
          border:
            props.visibleProjectType == navElements.fullStack?
              `1px solid ${highLightColor}`:'',
          transform:
            props.visibleProjectType == navElements.fullStack?
              `scale(${transitionScale})`:`scale(${normalScale})`
        }}
      >
        Full-Stack
      </p>
      <p
        onClick={()=>{props.setVisibleProjectType(navElements.mobileApps)}}
        style={{
          color:
            props.visibleProjectType == navElements.mobileApps?
              highLightColor:'',
          border:
            props.visibleProjectType == navElements.mobileApps?
              `1px solid ${highLightColor}`:'',
          transform:
            props.visibleProjectType == navElements.mobileApps?
              `scale(${transitionScale})`:`scale(${normalScale})`
        }}
      >
        Mobile Apps</p>
      <p
        onClick={()=>{props.setVisibleProjectType(navElements.gameDev)}}
        style={{
          color:
            props.visibleProjectType == navElements.gameDev?
              highLightColor:'',
          border:
            props.visibleProjectType == navElements.gameDev?
              `1px solid ${highLightColor}`:'',
          transform:
            props.visibleProjectType == navElements.gameDev?
              `scale(${transitionScale})`:`scale(${normalScale})`
        }}
      >
        Game Dev</p>
    </div>
  )
}
function FullStack(){
  return(
      <div>
        {/* Project 1 */}
        <div className={style.fadeIn}>
          <div className={`${style.projectHeading} ${style.sectionSubHeading} ${winkyRough.className}`}>
            <p> Academic Research Database </p>  
          </div> 
          <ol>
              <li>• Built a full‑stack academic publishing platform using React Native, Python, and Supabase, enabling students 
                to upload, search, and manage research papers.</li>
              <li>• Integrated AI‑powered PDF summarization and text‑to‑speech, reducing reading time and improving 
              accessibility for users. </li>
              <li>• Designed reusable UI components and optimized data flows, improving load times and maintainability across 
              the app.</li> 
              <li>• Collaborated with a team of six, contributing to feature planning, code reviews, and iterative improvements. 
              E-Commerce Website, 2024 </li>
              <li>• Developed a full e‑commerce platform using HTML, CSS, JavaScript, and MySQL enabling businesses to list 
              products and customers to browse and complete purchases online. </li>
              <li>• Designed a clean, responsive interface that improved navigation and reduced user friction during checkout. </li>
              <li>• Structured the backend database to support scalable product listings and efficient data retrieval to support 
              growing catalog sizes. </li>
          </ol>
        </div>
      </div>
  )
}

function MobileApplications() {
  return(
    <div>
      <div className={style.fadeIn}>
        {/*Project 1*/}
        <div className={`${style.projectHeading} ${style.sectionSubHeading} ${winkyRough.className}`}>
          <p>Vocabulo App </p>
        </div>
        <ol>
          <li>• Built a cross‑platform vocabulary‑learning app using React Native, helping users practice and retain new 
            words through interactive exercises. </li>
          <li>• Implemented cloud‑synced storage using Supabase, ensuring user progress is saved and accessible across 
            devices.</li> 
          <li>• Improved app responsiveness and reduced load times by optimizing component rendering and API calls.</li> 
        </ol>
      </div>
    </div>
  )
}

function GameDev(){
  return(
    <div className={style.fadeIn}>
      <div className={`${style.projectHeading} ${style.sectionSubHeading} ${winkyRough.className}`}>
        <p>Horror Visual Novel, Vault GameJam</p>
      </div>
      <p>Tech Stack : Godot, GDScript</p>
      <ol>
        <li>• Built a web‑based visual novel using Godot and GDScript</li>
        <li>• Implemented dialogue system, branching choices, UI, and scene transitions</li>
        <li>• Coordinated remotely with international contributors to align story and gameplay</li>
      </ol>
    </div>
  )
}