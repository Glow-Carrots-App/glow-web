import styles from "./styles.module.css";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <text className={styles.firstNameText}>FirstName</text>
        <text className={styles.joinDateText}>Joined April 2022</text>
      </div>
      <div className={styles.avatarContainer}></div>
    </div>
  );
};

export default UserInfo;
