 import styles from '../css/Button.module.css'
 export default function Button(props){
    return(<>
       <button className={styles.btn}>{props.no}</button>
    </>)
 }