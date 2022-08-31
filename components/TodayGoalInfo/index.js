import { VictoryPie } from "victory";

import populateDonutChartData from "../../utils/populateDonutChartData";
import TodayFoodList from "../TodayFoodList";

import styles from "./styles.module.css";

const TodayGoalInfo = ({ currentDay, user }) => {
  const {
    dailyGoal: { amount },
  } = user;

  const currentCount = currentDay.length;
  const todaysData = populateDonutChartData(currentDay, amount);
  const today = [
    "#fc7790",
    "#fd8f52",
    "#f3e28d",
    "#fef2d1",
    "#63dd92",
    "#9a7dcc",
    "#d1d0d0",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.goalContainer}>
        <div>
          <VictoryPie
            colorScale={today}
            padAngle={({ datum }) => datum}
            innerRadius={100}
            data={todaysData}
          />
          {currentCount >= amount && (
            <img className={styles.carrot} src="/stats/goldenCarrot.png" />
          )}
        </div>
        <p>
          {currentCount}/{amount} Foods
        </p>
      </div>
      <div className={styles.columnRight}>
        <TodayFoodList currentDay={currentDay} />
      </div>
    </div>
  );
};

export default TodayGoalInfo;
