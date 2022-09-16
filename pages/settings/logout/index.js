import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1";
import LogOut from "../../../components/LogOut";
import BottomTabs from "../../../components/BottomTabs";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";

import styles from "./styles.module.css";

const LogOutPage = () => {
  return (
    <PageContainer>
      <Sidebar page="logout" />
      <Heading1>Log Out</Heading1>
      <img
        role="images"
        src="/pageBackgrounds/watermelon.png"
        className={styles.watermelon1}
      />
      <img
        role="images"
        src="/pageBackgrounds/watermelon.png"
        className={styles.watermelon2}
      />
      <LogOut />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(LogOutPage);
