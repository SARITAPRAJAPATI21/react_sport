import Dropdown from "./Dropdown";
import styles from "../css/DropGroup.module.css";
import Footer from '../Footer/Footer'




export default function DropGroup() {
  const arr1 = [
    "1. Communicate with other players in your group,this way you can schedule your matches ahead of time.",
    "2. Respond to emails/ calls with-in 24 hours. Understand that everyone is as busy as you.",
    "3. Honor all calls. Most times your opponent has a better view. Keep it honest.",
    "4. Clash Court Sports does not promote betting of any kind. We will not be responsible for any form of gambling",
    "5. Know your body, limitations and skillset. his is supposed to be fun. Clash Court Sports will not be responsible for any injuries during play.",
    "6. Tennis courts and Pickleball courts are not the samecourts. Do NOT alter any lines on public courts.",
  ];

  const arr2 = ["We group players based upon their skill level."];

  const arr3 = [
    "You will need to coordinate with your opponent on when and where you play. Some players decide to use private courts, while others may choose courts open to the public. There is no limit on how many matches a person can play in a day.",
  ];

  const arr4 = [
    "Tennis matches will be played in a pro 10 system. This includes “add scoring” on all deuces and tie breakers on 9-9 games",
    "Pickleball matches will be played in a three set format. Each set will be 11 points",
  ];

  const arr5 = [
    "We follow USTA’s NRTP Rating system. Please visit XXX for a breakdown of the rating system.",
  ];
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>FAQ</h1>

        <Dropdown heading="RULES, ETIQUETTE & DISCLAIMERS" array={arr1} />
        <Dropdown heading="How Are Opponents Picked?" array={arr2} />
        <Dropdown heading="Where Do I Play?" array={arr3} />
        <Dropdown heading="How Long Is A Match?" array={arr4} />
        <Dropdown heading="How Are Players Ranked?" array={arr5} />
        <Dropdown heading="How Are Players Ranked?" array={arr5} />
        <Dropdown heading="How Are Players Ranked?" array={arr5} />
       </div>
     
        
     
   
    </>
  );
}
