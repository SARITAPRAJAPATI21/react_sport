import styles from "../css/Homework.module.css";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";

export default function Homework() {
  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <h4 className={styles.heading}>How it works</h4>

        <div className={styles.process}>
          <h5 className={styles.bg}>1</h5>
          <h5 className={styles.text}>Register</h5>
        </div>
        <div className={styles.process}>
          <h5 className={styles.bg}>2</h5>
          <h5 className={styles.text}>Connect with opponents</h5>
        </div>
        <div className={styles.process}>
          <h5 className={styles.bg}>3</h5>
          <h5 className={styles.text}>Play</h5>
        </div>
        <div className={styles.process}>
          <h5 className={styles.bg}>4</h5>
          <h5 className={styles.text}>Record Scores</h5>
        </div>
      </div>

      <div className={styles.pic}>
        <img className={styles.im1} src={w1} alt="w1" />
        <img className={styles.im2} src={w2} alt="w1" />
      </div>
    </div>
  );
}
