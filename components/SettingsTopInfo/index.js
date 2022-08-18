import Link from "next/link";
import Image from "next/image";

import Heading2 from "../Heading2";
import food from "../../public/avatars/food.png";

import styles from "./styles.module.css";

const SettingsTopInfo = () => {
  return (
    <div className={styles.container}>
      <Heading2 className={styles.yourHeading2rofile}>Your Profile</Heading2>
      <Link href="/settings/change-avatar">
        <a className={styles.avatarContainer}>
          <Image src={food} width="70px" height="70px" />
        </a>
      </Link>
    </div>
  );
};

export default SettingsTopInfo;
