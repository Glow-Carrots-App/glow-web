import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";

import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <button className={styles.settingsBtn}>S</button>
      <Heading1>Profile</Heading1>
      <UserInfo />
      <Statistics />
      <ColorBreakdown />
    </div>
  );
};

export default ProfilePage;
