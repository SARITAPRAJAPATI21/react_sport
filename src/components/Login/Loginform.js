import { NavLink } from "react-bootstrap";
import styles from "../css/Loginform.module.css";
export default function Loginform() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className="form-group" id={styles.namediv}>
          <label htmlFor="exampleInputEmail1" className={styles.labele}>
            Email Address
          </label>
          <input
            type="email"
            class="form-control"
            id={styles.emailIn}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group" id={styles.passdiv}>
          <label htmlFor="exampleInputEmail1" className={styles.labelp}>
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id={styles.passIn}
            aria-describedby="emailHelp"
          />
        </div>
      </form>

      <div className={styles.content2}>
        <NavLink  className={styles.lostpass} href="#"> Lost Your Password</NavLink>
        <div class="form-check"  id={styles.check}>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
           
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember Me
          </label>
        </div>
        <button className={styles.btn}>Submit</button>
      </div>
      
    </div>
  );
}
