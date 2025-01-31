import styles from '../css/Time.module.css'
import Time from './Time'

export default function RegiTime(){
    return(
        <div className={styles.timecontainer}>
        <Time number="14" unit="Hourse"/>
         <Time number="02" unit="Mintues"/>
         <Time number="22" unit="Seconds"/>
         </div>


    )

}