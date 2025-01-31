import styles from "../css/Card.module.css";
import regi1 from "../assets/regi1.png";
import regi2 from "../assets/regi2.png";
import regi3 from "../assets/regi3.png";
import Card from "./Card";

export default function Regi() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Registration</h1>
      <div className={styles.regiconatiner}>
        <Card img={regi1} text="Play Singles - $50" />
        <Card img={regi2} text="Play Singles - $50" />
        <Card img={regi3} text="Play Singles - $50" />
      </div>
    </div>
  );
}
