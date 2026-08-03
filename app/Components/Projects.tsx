import style from "@/app/style.module.css";
import { Winky_Rough } from "next/font/google";

const winkyRough = Winky_Rough({weight:'400'})
export default function Projects() {
  return(
    <div className={`${style.section} ${style.projects}`} >
      <h1 className={`${style.sectionHeading} ${winkyRough.className}`}> Projects </h1>
      {/*Project 1 */}
      <div>
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

      {/*Project 2 */}
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
  )
}