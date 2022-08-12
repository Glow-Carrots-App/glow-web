import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import WeeklyConsumption from "../../components/WeeklyConsumption";

import styles from "./styles.module.css";

const Today = () => {
  return (
    <div className={styles.container}>
      <Heading1>Today</Heading1>
      <TodayInfo />
      <WeeklyConsumption />
    </div>
  );
};

export default Today;
