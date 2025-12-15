import styles from "../css/Card.module.css";
import React from "react";

export default function Card({ img, text }) {
  return (
    <div className={styles.container}>
      <img src={img} alt="card" className={styles.image} />

      <div className={styles.overlay}>
        <h1 className={styles.text}>{text}</h1>
        <button className={styles.btn}>Register for Spring 2024</button>
      </div>
    </div>
  );
}
