import { useState } from "react";
import styles from "../css/Dropdown.module.css";
import close from "../assets/close.png";
import open from "../assets/open.png";

export default function Dropdown({ heading, array }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.group1} onClick={() => setOpenDropdown(!openDropdown)}>
        <h1 className={styles.title}>{heading}</h1>
        <button className={styles.icon}>
          <img src={openDropdown ? close : open} alt="toggle" />
        </button>
      </section>

      <section className={`${styles.group2} ${openDropdown ? styles.active : ""}`}>
        <div className={styles.content}>
          {array.map((item, index) => (
            <div key={index} className={styles.list}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
