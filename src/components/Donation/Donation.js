import Subscription from "./Subscription";

import styles from "../css/Donation.module.css";
import Footer from '../Footer/Footer'




export default function Donation() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Help them to build their better future
        </h1>
      </div>

      <Subscription />
      <section className={styles.footer}><Footer/></section>
      
    </>
  );
}
