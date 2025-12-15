import { useState } from "react";
import styles from "./css/Navbar.module.css";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />

      {/* Hamburger Button */}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={open ? styles.bar1open : styles.bar}></div>
        <div className={open ? styles.bar2open : styles.bar}></div>
        <div className={open ? styles.bar3open : styles.bar}></div>
      </div>

      {/* Menu */}
      <ul className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <li><NavLink to="/" className={styles.link}>Home</NavLink></li>
        <li><NavLink to="/login" className={styles.link}>Login</NavLink></li>
        <li><NavLink to="/register" className={styles.link}>Join</NavLink></li>
        <li><NavLink to="/faq" className={styles.link}>Faq</NavLink></li>
      </ul>
    </nav>
  );
}
