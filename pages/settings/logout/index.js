import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1";
import LogOut from "../../../components/LogOut";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const LogOutPage = () => {
  return (
    <WithProtected>
      <PageContainer>
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
      </PageContainer>
    </WithProtected>
  );
};

export default LogOutPage;
