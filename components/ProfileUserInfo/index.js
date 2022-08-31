import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const ProfileUserInfo = ({ user }) => {
  const { avatar, firstName, joinDate } = user;
  return (
    <div className={styles.container}>
      <Link href="/settings">
        <a className={styles.settingsBtn}>
          <FontAwesomeIcon icon={faGear} size="xl" color="#9084ab" />
        </a>
      </Link>
      <div className={styles.textContainer}>
        <Heading2>{firstName}</Heading2>
        <p className={styles.joinDateText}>{joinDate}</p>
      </div>
      <div className={styles.avatarContainer}>
        <img src={avatar} className={styles.image} />
      </div>
    </div>
  );
};

export default ProfileUserInfo;
