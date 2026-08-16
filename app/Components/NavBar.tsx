"use client";

import style from '@/app/style.module.css'
import { color, hover } from 'motion';
import { Winky_Rough } from 'next/font/google';
import React, { use, useState } from "react";

type props = {
  setDisplaySection:React.Dispatch<React.SetStateAction<string>>
}


export default function NavBar(props:props){

  let highLightColor = 'rgb(62, 180, 194)'
  let hoverColor = 'white'
  let normalColor = '#ffffffdc'
  const [navClick, changeNavClick] = useState("None")
  const [navHover, changeNavHover] = useState('none')


  return(
    <div className={`${style.NavBar}`}>
      <p 
        onClick={() => {
          props.setDisplaySection("AboutMe".toLowerCase())
          changeNavClick("aboutMe")
        }} 
        onMouseEnter={ 
          () => changeNavHover('aboutMe')
        }
        onMouseLeave={ () => changeNavHover('none') }
        style={{

          color: 
            navClick=="aboutMe"?
              highLightColor:
            navHover=='aboutMe'?
              hoverColor: normalColor,
          borderColor:
            navClick=="aboutMe"?
              highLightColor:
            navHover=='aboutMe'?
              hoverColor: normalColor,
          transform:
            navClick=="aboutMe"?'scale(1.1)':'scale(1)'
          }}>
            About Me
      </p>

      <p
        onClick={() => {
          props.setDisplaySection("Projects".toLowerCase())
          changeNavClick("projects")
        }} 
        onMouseEnter={ () => changeNavHover('projects') }
        onMouseLeave={ () => changeNavHover('none') }
        style={{

          color: 
            navClick=="projects"?
              highLightColor:
            navHover=='projects'?
              hoverColor: normalColor,
          borderColor:
            navClick=="projects"?
              highLightColor:
            navHover=='projects'?
              hoverColor: normalColor,
          transform:navClick=="projects"?'scale(1.1)':'scale(1)'
        }}
        >
          Projects
      </p>
      <p
        onClick={() => {
          props.setDisplaySection("WorkExperience".toLowerCase())
          changeNavClick("experience")
        }} 
        onMouseEnter={ () => changeNavHover('experience') }
        onMouseLeave={ () => changeNavHover('none') }
        style={{
          
          color: 
            navClick=="experience"?
              highLightColor:
            navHover=='experience'?
              hoverColor: normalColor,
          borderColor:
            navClick=="experience"?
              highLightColor:
            navHover=='experience'?
              hoverColor: normalColor,
          transform:navClick=="experience"?'scale(1.1)':'scale(1)'
        }}
        >
          Experience
      </p>
      <p
        onClick={() => {
          props.setDisplaySection("ContactMe".toLowerCase())
          changeNavClick("contactMe")
        }} 
        onMouseEnter={ () => changeNavHover('contactMe') }
        onMouseLeave={ () => changeNavHover('none') }
        style={{
          color: 
            navClick=="contactMe"?
              highLightColor:
            navHover=='contactMe'?
              hoverColor: normalColor,
          borderColor:
            navClick=="contactMe"?
              highLightColor:
            navHover=='contactMe'?
              hoverColor: normalColor,
          transform:navClick=="contactMe"?'scale(1.1)':'scale(1)'
        }}
        >
          Contact Me
      </p>

    </div>
  )
}