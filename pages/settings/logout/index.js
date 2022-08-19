import Heading1 from "../../../components/Heading1";
import LogOut from "../../../components/LogOut";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const LogOutPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Log Out</Heading1>
      <LogOut />
      <BottomTabs />
    </div>
  );
};

export default LogOutPage;
