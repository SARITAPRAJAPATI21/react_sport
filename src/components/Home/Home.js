import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import Regi from "./Regi";
import Homedonation from "./Homedonation";
import Homework from "./Homework";
import HomeContact from "./HomeContact";
import Homefounder from "./Homefounder";
import Footer from "../Footer/Footer";
import styles from '../Footer/Footer.module.css'
export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <Regi />
      <Homedonation />
      <Homework />
      <Homefounder />
      <HomeContact></HomeContact>
      <section className={styles.Homefooter}>
      <Footer />
      </section>
    
    </>
  );
}
