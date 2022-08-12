import Link from "next/link";

import styles from "./styles.module.css";

const SettingsTopInfo = () => {
  return (
    <div className={styles.container}>
      <p className={styles.yourProfile}>Your Profile</p>
      <Link href="/settings/change-avatar">
        <a className={styles.avatarContainer}>Avatar</a>
      </Link>
    </div>
  );
};

export default SettingsTopInfo;
