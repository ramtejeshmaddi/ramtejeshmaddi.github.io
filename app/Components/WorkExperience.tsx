import style from "@/app/style.module.css";
import { Winky_Rough, Sour_Gummy } from "next/font/google";

const winkyRough = Winky_Rough({weight:'400'})
const sourGummy = Sour_Gummy()
export default function WorkExperience() {
  return (
    <div className={`${style.section} ${style.workExperience}`}>
      <h1 className={`${style.sectionHeading} ${winkyRough.className}`}>Work Experience</h1>
      <div>
        <h1 className={`${style.sectionSubHeading} ${winkyRough.className}`}>ICT : Information Communication Technology - Intern</h1>
        <div className={`${style.companyContainer} ${winkyRough.className}`}>
          <h2> Shannex </h2>
          <p className={style.year}>2024</p>
        </div>
        <p>
          Joined the ICT team at Shannex to troubleshoot system issues, imaging new devices,
          and maintaining enterprise hardware and software environments. 
        </p>
        <ol className={style.sectionList}>
            <li>1. Streamlined hardware inventory tracking using Excel and internal tools, improving accuracy and reducing equipment loss.</li>
            <li>2. Troubleshot laptops, networking issues, and user accounts, resolving daily IT tickets and minimizing downtime. </li>
            <li>3. Authored clear SOPs used by new interns and staff, improving onboarding efficiency </li>
            <li>4. Worked within existing enterprise systems, improving reliability and documenting processes for long‑term maintainability.</li>
        </ol>
      </div>
      
    </div>
  );
}