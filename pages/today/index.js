import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";

import styles from "./styles.module.css";

const Today = () => {
  return (
    <div className={styles.container}>
      <Heading1>Today</Heading1>
      <TodayInfo />
    </div>
  );
};

export default Today;
