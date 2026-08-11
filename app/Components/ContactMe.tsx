import style from "@/app/style.module.css"
export default function ContactMe(){
    return(
        <div className={style.contactMeParent}>
            <div className={`${style.section} ${style.contactMe}`}>
                <div>
                    <p className={style.contactMeHeadings}><b> Gmail </b> </p> 
                    <p> ramtejeshreddymaddi@gmail.com</p>
                </div>
                <div>
                    <p className={style.contactMeHeadings}> <b> LinkedIn </b> </p> 
                    <p> Ram Tejesh Reddy Maddi </p>
                </div>
            </div>
        </div>
    )
}