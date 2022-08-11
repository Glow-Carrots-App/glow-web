import Heading2 from "../Heading2";
import styles from "./styles.module.css";

const LogOut = () => {
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to log out?</Heading2>
      <div className={styles.buttonContainer}>
        <button>Cancel</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default LogOut;
