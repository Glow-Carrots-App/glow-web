import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const SettingsTopInfo = ({ user }) => {
  const { avatar } = user;

  return (
    <div className={styles.container}>
      <Link href="/profile">
        <a className={styles.doneLink} role="anchor1">
          <img src="/buttonIcons/back.png" role="image1" />
        </a>
      </Link>
      <Heading2>Your Profile</Heading2>
      <Link href="/settings/change-avatar">
        <a className={styles.avatarContainer} role="anchor2">
          <img src={avatar} className={styles.image} role="image2" />
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            color="#573d8d"
            className={styles.pen}
          />
        </a>
      </Link>
    </div>
  );
};

export default SettingsTopInfo;
