import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";

import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <button className={styles.settingsBtn}>S</button>
      <Heading1>Profile</Heading1>
      <UserInfo />
    </div>
  );
};

export default ProfilePage;
