import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";
import { Circle } from "victory";

const SettingsTopInfo = () => {
  return (
    <div className={styles.container}>
      <Heading2 className={styles.yourHeading2rofile}>Your Profile</Heading2>
      <Link href="/settings/change-avatar">
        <a className={styles.avatarContainer}>
          <img src="/avatars/camp.png" className={styles.image} />
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
