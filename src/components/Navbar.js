
import styles from './css/Navbar.module.css'
import logo from './assets/logo.png'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.container}>
          <img className={styles.logo} src={logo} alt='logo'/>
          <ul className={styles.item}>
            <li> <NavLink to="/" className={styles.link}>Home</NavLink></li>
            <li ><NavLink to="login" className={styles.link}>Login</NavLink></li>
            <li ><NavLink to="register" className={styles.link}>Join</NavLink></li>
            <li ><NavLink to="faq" className={styles.link}>Favq</NavLink></li>
          </ul>
        </nav>
    );
  }