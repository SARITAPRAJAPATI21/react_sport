import { NavLink } from "react-router-dom";
import styles from "../css/Homedonation.module.css";


export default function Homedonation() {
  return (
    <div className={styles.donation}>
      <h3>Giving Back</h3>
      <p>
        Your contributions play a direct role in maintaining our school’s tennis
        courts. By donating, you’re ensuring that our students have a well-kept
        space to develop their skills and love for the sport. Your support goes
        straight to the school, empowering our youth and fostering a community
        of enthusiastic athletes. Thank you for considering this cause and for
        your invaluable support!
      </p>
      <NavLink to="donation" className={styles.btn}>
        {" "}
        Donate To A School Of Your Choice
      </NavLink>
    </div>
  );
}
