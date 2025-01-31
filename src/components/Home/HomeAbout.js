import styles from "../css/HomeAbout.module.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
export default function HomeAbout() {
  return (
    <div className={styles.HomeAbout}>
      <div className={styles.container1}>
        <h1 className={styles.title}>Welcome to Clash Court Sports</h1>
        <div className={styles.para}>
          <p>
            At Clash Court Sports, we are dedicated to providing everyone with
            tennis  and pickleball partners. It’s simple…. Register, Connect
            with Opponents, Play and Record Scores.
          </p>
          <p>
            Whether you’re a beginner or a seasoned player looking to compete,
            we have something for you.
          </p>
          <p>
            Come join us and be a part of our tennis and pickleball community.
            Meet new friends, challenge yourself and have a blast. We can’t wait
            to see you on the courts!
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <img className={styles.img1} src={img1} alt="about" />
        <img className={styles.img2} src={img2} alt="about" />
      </div>
    </div>
  );
}
