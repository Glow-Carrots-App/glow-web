import { signOut } from "firebase/auth";

import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";
import { auth } from "../../firebase";

import styles from "./styles.module.css";

const LogOut = () => {
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("LOGOUT SUCCESSFUL");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to log out?</Heading2>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings" onClick={handleLogOut}>
          Cancel
        </SmallLinkedButton>
        <SmallLinkedButton href="/sign-in">Logout</SmallLinkedButton>
      </div>
    </div>
  );
};

export default LogOut;
