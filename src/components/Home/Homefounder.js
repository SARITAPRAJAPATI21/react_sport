import styles from "../css/Homefounder.module.css";

export default function Homefounder() {
  return (
    <div className={styles.founder}>
      <div className={styles.fpara}>
        <p>Bringing all Long Island tennis and pickleball players together.</p>
        <p>Hope to see you on the courts.</p>
      </div>
      <h6 className={styles.writeby}> -Tribby (Founder)</h6>
    </div>
  );
}
