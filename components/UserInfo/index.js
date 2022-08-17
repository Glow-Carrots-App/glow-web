import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Heading2>FirstName</Heading2>
        <p className={styles.joinDateText}>Joined April 2022</p>
      </div>
      <div className={styles.avatarContainer}></div>
    </div>
  );
};

export default UserInfo;
