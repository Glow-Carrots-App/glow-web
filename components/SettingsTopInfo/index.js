import Link from "next/link";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const SettingsTopInfo = () => {
  return (
    <div className={styles.container}>
      <Heading2 className={styles.yourHeading2rofile}>Your Profile</Heading2>
      <Link href="/settings/change-avatar">
        <a className={styles.avatarContainer}>
          <img src="/avatars/camp.png" className={styles.image} />
        </a>
      </Link>
    </div>
  );
};

export default SettingsTopInfo;
