import styles from "../css/Subscription.module.css";
import Button from "./Button";
import p1 from "../assets/card.png";
import p2 from "../assets/paypal.png";

export default function Subscription() {
  return (
    <div className={styles.container}>
      <section className={styles.group1}>
        <button className={styles.g1btn}>Give Monthly</button>
        <button className={styles.g1btn}>Give Once</button>
      </section>

      <button className={styles.g2btn}>Choose a Monthly Plan</button>

      <section className={styles.group3}>
        <Button no="$15"></Button>
        <Button no="$30"></Button>
        <Button no="$50"></Button>
        <Button no="$75"></Button>
        <Button no="$100"></Button>
        <Button no="others"></Button>
      </section>

      <section className={styles.group4}>
        <h1 className={styles.title}>Your Gift Amount</h1>
        <h1 className={styles.amount}>$15</h1>
        <div className={styles.card}>
          <img className={styles.p1} src={p2} alt="" />
          <div className={styles.p2}>
            <img src={p1} alt="" /> pay with card
          </div>
        </div>
        <button className={styles.subbtn}>Continue</button>
      </section>
    </div>
  );
}
