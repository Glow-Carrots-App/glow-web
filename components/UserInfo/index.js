import Heading2 from "../Heading2";
import Image from "next/image";

import food from "../../public/avatars/food.png";

import styles from "./styles.module.css";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Heading2>FirstName</Heading2>
        <p className={styles.joinDateText}>Joined April 2022</p>
      </div>
      <div className={styles.avatarContainer}>
        <Image
          src={food}
          alt="Picture of the author"
          width="70px"
          height="70px"
        />
      </div>
    </div>
  );
};

export default UserInfo;
