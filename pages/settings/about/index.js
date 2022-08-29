import Link from "next/link";

import Heading1 from "../../../components/Heading1/index";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const AboutUs = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>About Glow</Heading1>
        <Link href="/settings">
          <a className={styles.doneLink}>
            <img src="/buttonIcons/reply.png" />
          </a>
        </Link>
        <img src="/pageBackgrounds/banana.png" className={styles.banana} />
        <p>
          Glow is a food tracker app inspired by the Rainbow Diet and science
          linking nutrition to the colors of natural foods.
          <br />
          <br />
          This app is intended for all ages. It is not indended to treat,
          diagnose, prevent, or cure diseases.
          <br />
          <br />
          Icons are made by
          <a href="https://www.flaticon.com/authors/freepik"> Freepik</a> from
          <a href="https://www.flaticon.com/"> www.flaticon.com</a>.
        </p>
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default AboutUs;
