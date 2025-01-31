import styles from "../css/RegisterImg.module.css"

export default function RegisteImg(){
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>The Event is coming soon</h1>
        <div className={styles.para}>
        Get ready for something exciting! Our team is hard at
        work crafting an exceptional experience for you. 
        </div>
        <button className={styles.btn}>Join Now</button>

        </div>
   

   
    )
}