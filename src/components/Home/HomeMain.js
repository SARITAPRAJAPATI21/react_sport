import styles from "../css/HomeMain.module.css";
import { NavLink } from "react-router-dom";

export default function HomeMain() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clash court sports</h1>

      <p className={styles.para}>
        Long Island’s Premier Pick-Up Tennis & Pickleball League
      </p>

      <div className={styles.btnGroup}>
        <NavLink to="register" className={styles.jbtn}>Join Now</NavLink>
        <NavLink to="faq" className={styles.fbtn}>Faq</NavLink>
      </div>
    </div>
  );
}

