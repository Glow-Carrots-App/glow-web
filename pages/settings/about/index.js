import Link from "next/link";

import Heading1 from "../../../components/Heading1/index";
import BottomTabs from "../../../components/BottomTabs/index";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";
import About from "../../../components/About";

import styles from "./styles.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Heading1>About Glow</Heading1>
      <Link href="/settings">
        <a className={styles.doneLink}>
          <img src="/buttonIcons/back.png" />
        </a>
      </Link>
      <About />
      <img src="/pageBackgrounds/wheat.png" className={styles.wheat} />
      <BottomTabs />
    </div>
  );
};

export default withProtected(AboutUs);
