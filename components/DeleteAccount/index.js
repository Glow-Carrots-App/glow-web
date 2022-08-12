import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const DeleteAccount = () => {
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to delete your account?</Heading2>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/sign-in">Delete</SmallLinkedButton>
      </div>
    </div>
  );
};

export default DeleteAccount;
