import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const LogOut = () => {
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to log out?</Heading2>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/sign-in">Logout</SmallLinkedButton>
      </div>
    </div>
  );
};

export default LogOut;
