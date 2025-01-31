import styles from "../css/Card.module.css";
import React from "react";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} alt="regi1" />
      <h1 className={styles.text}>{props.text}</h1>
      <button className={styles.btn}>Register for Spring 2024</button>
    </div>
  );
}
