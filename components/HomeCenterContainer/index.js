import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import LargeLinkedButton from "../LargeLinkedButton";

import styles from "./styles.module.css";

const HomeCenterContainer = () => {
  return (
    <>
      <div className={styles.centerContainer}>
        <div className={styles.headings}>
          <Heading1 isLanding={true}>
            Welcome to <span className={styles.glowText}>Glow</span>
          </Heading1>
          <Heading2>
            The fun and effective way to document all the healthy, colorful
            foods we eat!
          </Heading2>
          <Heading2>
            Start tracking your Rainbow Diet and collect Golden Carrots today!
          </Heading2>
        </div>
        <div className={styles.buttonPair}>
          <img className={styles.carrot3} src="/stats/goldenCarrot.png" />
          <img className={styles.carrot4} src="/stats/goldenCarrot.png" />
          <LargeLinkedButton href="/create-account" isLanding={true}>
            Get Started
          </LargeLinkedButton>
          <LargeLinkedButton href="/sign-in" isLanding={true}>
            I Already Have An Account
          </LargeLinkedButton>
        </div>
      </div>
    </>
  );
};

export default HomeCenterContainer;
