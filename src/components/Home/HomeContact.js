import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/HomeContact.module.css";

export default function HomeContact() {
  return (
    <>
      <div className={styles.contact}>
      
        <div className={styles.contact1}>
          <h1 className={styles.title}>Contact Us Now</h1>
          <p className={styles.para}>
            Fill out the form below to get in touch with us. We are here to
            answer any questions you may have and provide you with the best
            tennis experience.
          </p>
        </div>

        <div className={styles.contact2}>
          <div className={styles.content1}>
            <div className="form-group" id={styles.name}>
              <label htmlFor="exampleInputEmail1" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id={styles.nameInput}
                aria-describedby="emailHelp"
                placeholder="E.g Nishtha"
              />
            </div>
            <div className="form-group" id={styles.name}>
              <label htmlFor="exampleInputEmail1" className={styles.label2}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id={styles.emailInput}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group" id={styles.message}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className={styles.label3}
              >
                Message
              </label>
              <textarea
                className="form-control"
                id={styles.messageIn}
                rows="10"
              ></textarea>
            </div>
          </div>
          <button className={styles.btn}>Send</button>
        </div>
      </div>
    </>
  );
}
