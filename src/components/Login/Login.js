import LoginImg from "./LoginImg"
import Loginform from "./Loginform"
import Footer from '../Footer/Footer'
import styles from '../Footer/Footer.module.css'

export default function Login(){
    return(<>
    <LoginImg/>
    <Loginform/>
    <section className={styles.Loginfooter}> <Footer /></section> 

    </>)
}