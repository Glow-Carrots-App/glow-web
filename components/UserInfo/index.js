import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../context/AuthContext";
import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const UserInfo = () => {
  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <div className={styles.container}>
      <Link href="/settings">
        <a className={styles.settingsBtn}>
          <FontAwesomeIcon icon={faGear} size="xl" color="#9084ab" />
        </a>
      </Link>
      <div className={styles.textContainer}>
        <Heading2>FirstName</Heading2>
        <p className={styles.joinDateText}>Joined April 2022</p>
      </div>
      <div className={styles.avatarContainer}>
        <img src="/avatars/camp.png" className={styles.image} />
      </div>
    </div>
  );
};

export default UserInfo;
