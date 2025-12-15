import styles from "../css/Regiform.module.css";

export default function Regiform() {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <div className={styles.r1}>
          <div className={styles.c1}>
            <label className={styles.label}> First Name</label>
            <input type="text" id={styles.in} />
          </div>
          <div className={styles.c1}>
            <label className={styles.label1}>Last Name</label>
            <input type="text" id={styles.in} />
          </div>
        </div>
        <div className={styles.r1}>
          <div className={styles.c1}>
            <label className={styles.label}> Phone Number</label>
            <input type="text" id={styles.in} />
          </div>
          <div className={styles.c1}>
            <label className={styles.label}>Email</label>
            <input type="text" id={styles.in} />
          </div>
        </div>
        <div className={styles.r1}>
          <div className={styles.c1}>
            <label className={styles.label}> City</label>
            <input type="text" id={styles.in} />
          </div>
          <div className={styles.c1}>
            <label className={styles.label}>State</label>
            <input type="text" id={styles.in} />
          </div>
        </div>
        <div className={styles.r1}>
          <div className={styles.c1}>
            <label className={styles.label}>Zip/Postal Code* </label>
            <input type="text" id={styles.in} />
          </div>
        </div>

        <div className={styles.radio1}>
          <h6 className={styles.rtitle}>Pickleball Spring</h6>
          <div className={styles.roption}>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                Singles-$50
              </label>
            </div>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                Doubles-$50
              </label>
            </div>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                N/A
              </label>
            </div>
          </div>
        </div>
        <div className={styles.radio2}>
          <h6 className={styles.rtitle}>TennisSpring2024</h6>
          <div className={styles.roption}>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                Singles-$50
              </label>
            </div>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                Doubles-$50
              </label>
            </div>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                N/A
              </label>
            </div>
          </div>
        </div>

        <div className={styles.radio3}>
          <h6 className={styles.rtitle}>Skill Level</h6>
          <div className={styles.roption}>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                Beginner (1.0-3.0)
              </label>
            </div>
            <div className={styles.option}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className={styles.labelradio} for="flexRadioDefault1">
                Advanced (3.5-4.0)
              </label>
            </div>
          </div>
        </div>

        <div className={styles.r1}>
          <div className={styles.c1}>
            <label className={styles.label}>Password </label>
            <input type="text" id={styles.in}  className={styles.passIn}/>
          </div>
        </div>

        <button className={styles.btn}>Register</button>
      </section>
    </div>
  );
}
