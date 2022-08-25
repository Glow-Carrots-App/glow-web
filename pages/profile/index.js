import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";

import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Profile</Heading1>
        <UserInfo />
        <Statistics />
        <ColorBreakdown />
        <BottomTabs isProfile={true} />
      </div>
    </WithProtected>
  );
};

export default ProfilePage;
