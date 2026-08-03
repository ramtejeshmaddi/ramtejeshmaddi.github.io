"use client";

import style from '@/app/style.module.css'
import { Winky_Rough } from 'next/font/google';
import React, { use, useState } from "react";

type props = {
  setDisplaySection:React.Dispatch<React.SetStateAction<string>>
}

const winkyRough = Winky_Rough()
export default function NavBar(props:props){

  let navColorSets = {
    aboutMe : ['rgb(62, 180, 194)', 'white', 'white'],
    workExperience : ['white', 'rgb(62, 180, 194)', 'white'],
    projects : ['white', 'white', 'rgb(62, 180, 194)']
  }
  
  const [ColorSets, updateColorSet] = useState(['White', 'white', 'white'])

  console.log(ColorSets)

  return(
    <div className={`${style.NavBar}`}>
      <p 
        onClick={() => {
          updateColorSet(navColorSets.aboutMe)
          props.setDisplaySection("AboutMe".toLowerCase())
        }} 
        style={{
          color:ColorSets[0],
          borderColor:ColorSets[0],
          transform:
            ColorSets[0]=='rgb(62, 180, 194)'?'scale(1.1)':'scale(1)'
          }}>
            About Me
      </p>

      <p
        onClick={() => {
          updateColorSet(navColorSets.projects)
          props.setDisplaySection("Projects".toLowerCase())
        }} 
        style={{color:ColorSets[2], borderColor:ColorSets[2], transform:ColorSets[2]=='rgb(62, 180, 194)'?'scale(1.1)':'scale(1)'}}
        >
          Projects
      </p>
      <p
        onClick={() => {
          updateColorSet(navColorSets.workExperience)
          props.setDisplaySection("WorkExperience".toLowerCase())
        }} 
        style={{color:ColorSets[1],borderColor:ColorSets[1] ,transform:ColorSets[1]=='rgb(62, 180, 194)'?'scale(1.1)':'scale(1)' }}
        >
          Experience
      </p>

    </div>
  )
}