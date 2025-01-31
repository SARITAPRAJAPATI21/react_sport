import styles from '../css/Time.module.css'

export default function Time(props){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.number}>{props.number}</h1>
               <p className={styles.text}>{props.unit}</p>
            </div>
        </div>
    )

}