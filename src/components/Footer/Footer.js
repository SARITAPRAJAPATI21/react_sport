import styles from './Footer.module.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { NavLink } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>

        <div className={styles.social}>
          <NavLink className={styles.insta} to='#'><FaInstagram /></NavLink>
          <NavLink className={styles.face} to='#'><FaFacebook /></NavLink>
        </div>
      </footer>
    </>
  );
}
