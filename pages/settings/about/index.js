import Link from "next/link";

import Heading1 from "../../../components/Heading1/index";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Heading1>About Glow</Heading1>
      <Link href="/settings">
        <a className={styles.doneLink}>Back</a>
      </Link>
      <img src="/pageBackgrounds/banana.png" className={styles.banana} />
      <p>
        Glow is a food tracker app inspired by the Rainbow Diet and science
        linking nutrition to the colors of natural foods.
      </p>
      <p>
        This app is intended for all ages. It is not indended to treat,
        diagnose, prevent, or cure diseases.
      </p>
      <p>
        Icons are made by
        <a href="https://www.flaticon.com/authors/freepik"> Freepik</a> from
        <a href="https://www.flaticon.com/"> www.flaticon.com</a>.
      </p>
      <BottomTabs />
    </div>
  );
};

export default AboutUs;
