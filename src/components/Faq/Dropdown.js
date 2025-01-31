import styles from "../css/Dropdown.module.css";

import close from "../assets/close.png";
import open from "../assets/open.png";

export default function Dropdown(props) {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.group1}>
          <h1 className={styles.title}>{props.heading}</h1>
          <button className={styles.icon}>
            <img src={open} alt="icon" />
          </button>
        </section>

        <section className={styles.group2}>
          <div className={styles.content}>
            {props.array.map((index) => (
              <div key={index} className={styles.list}>
                {index}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
