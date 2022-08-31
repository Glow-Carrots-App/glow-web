import { useState } from "react";

import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const LogOut = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const handleLogOut = async (e) => {
    e.preventDefault();

    try {
      await logout();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to log out?</Heading2>
      <div className={styles.buttonPair}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <button className={styles.smallButton} onClick={handleLogOut}>
          Log Out
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default LogOut;
