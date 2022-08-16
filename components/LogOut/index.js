import { useRouter } from "next/router";

import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const LogOut = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogOut = async (e) => {
    e.preventDefault();

    try {
      await logout(user);
      router.push("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to log out?</Heading2>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <a className={styles.smallButton} onClick={handleLogOut}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default LogOut;
