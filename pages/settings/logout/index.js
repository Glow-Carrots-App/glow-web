import Heading1 from "../../../components/Heading1";
import LogOut from "../../../components/LogOut";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const LogOutPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Log Out</Heading1>
      <img
        src="/pageBackgrounds/watermelon.png"
        className={styles.watermelon1}
      />
      <img
        src="/pageBackgrounds/watermelon.png"
        className={styles.watermelon2}
      />
      <LogOut />
      <BottomTabs />
    </div>
  );
};

export default LogOutPage;
