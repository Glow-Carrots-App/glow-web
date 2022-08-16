import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import WeeklyConsumption from "../../components/WeeklyConsumption";
import BottomTabs from "../../components/BottomTabs";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const Today = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={styles.container}>
      <Heading1>Today</Heading1>
      <TodayInfo />
      <WeeklyConsumption />
      <BottomTabs />
    </div>
  );
};

export default Today;
