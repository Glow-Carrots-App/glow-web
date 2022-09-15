import Link from "next/link";

import Heading1 from "../../../components/Heading1/index";
import BottomTabs from "../../../components/BottomTabs/index";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";
import About from "../../../components/About";

import styles from "./styles.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Heading1>About Glow</Heading1>
      <Link href="/settings">
        <a role="doneLink" className={styles.doneLink}>
          <img role="images" src="/buttonIcons/back.png" />
        </a>
      </Link>
      <About />
      <img
        role="images"
        src="/pageBackgrounds/wheat.png"
        className={styles.wheat}
      />
      <BottomTabs />
    </div>
  );
};

export default withProtected(AboutPage);
