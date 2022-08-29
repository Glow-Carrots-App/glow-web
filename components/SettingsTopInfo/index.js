import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../Heading2";
import DoneButton from "../DoneButton";

import styles from "./styles.module.css";

const SettingsTopInfo = ({ user }) => {
  const { avatar } = user;

  return (
    <div className={styles.container}>
      <DoneButton href="/profile" />
      <Heading2>Your Profile</Heading2>
      <Link href="/settings/change-avatar">
        <a className={styles.avatarContainer}>
          <img src={avatar} className={styles.image} />
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
