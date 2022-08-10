import Heading1 from "../../../components/Heading1/index.js";
import LogOut from "../../../components/LogOut/index.js";
import styles from "./styles.module.css";

const Logout = () => {
  return (
    <div className={styles.container}>
      <Heading1>Log Out</Heading1>
      <LogOut />
    </div>
  );
};

export default Logout;
