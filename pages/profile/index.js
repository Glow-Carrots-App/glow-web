import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Profile</Heading1>
      <UserInfo />
      <Statistics />
      <ColorBreakdown />
      <BottomTabs isProfile={true} />
    </div>
  );
};

export default ProfilePage;
