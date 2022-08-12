import styles from "./styles.module.css";

const SettingsTopInfo = () => {
  return (
    <div className={styles.container}>
      <p className={styles.yourProfile}>Your Profile</p>
      <div className={styles.avatarContainer}>Avatar</div>
    </div>
  );
};

export default SettingsTopInfo;
