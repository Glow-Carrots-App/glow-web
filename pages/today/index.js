import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import ConsumptionHistory from "../../components/ConsumptionHistory";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";

import styles from "./styles.module.css";

const Today = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Today</Heading1>
        <TodayInfo />
        <ConsumptionHistory />
        <BottomTabs isToday={true} />
      </div>
    </WithProtected>
  );
};

export default Today;
