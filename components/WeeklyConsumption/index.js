import VerticalColorBreakdown from "../VerticalColorBreakdown";
import sampleFoodData from "../../sampleData/sampleFoodData";
import lastSevenDays from "../../utils/lastSevenDays";

import styles from "./styles.module.css";

const WeeklyConsumption = () => {
  let sevenDays = lastSevenDays(sampleFoodData);
  console.log(sevenDays);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button>7 days</button>
        <button>14 days</button>
        <button>30 days</button>
      </div>
      <div className={styles.barChart}>
        <div className={styles.barChartContainer}>
          <VerticalColorBreakdown />
          <VerticalColorBreakdown />
          <VerticalColorBreakdown />
          <VerticalColorBreakdown />
          <VerticalColorBreakdown />
          <VerticalColorBreakdown />
          <VerticalColorBreakdown />
        </div>
      </div>
    </div>
  );
};

export default WeeklyConsumption;
