import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../context/AuthContext";
import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const SettingsTopInfo = () => {
  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <div className={styles.container}>
      <Link href="/profile">
        <a className={styles.doneLink}>Done</a>
      </Link>
      <Heading2>Your Profile</Heading2>
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
