import { VictoryPie } from "victory";

import populateDonutChartData from "../../utils/populateDonutChartData";
import TodayFoodList from "../TodayFoodList";

import styles from "./styles.module.css";

const TodayGoalInfo = ({ currentDay, user }) => {
  const { dailyGoalAmount, isDailyGoalComplete } = user;

  const currentCount = currentDay.length;
  const todaysData = populateDonutChartData(currentDay, dailyGoalAmount);
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
    <div role="parentContainer" className={styles.container}>
      <div role="piePTagContainer" className={styles.goalContainer}>
        <div role="pieAndCarrotContainer">
          <VictoryPie
            data-testid="victory-chart"
            colorScale={today}
            padAngle={({ datum }) => datum}
            innerRadius={100}
            data={todaysData}
          />
          {isDailyGoalComplete && (
            <img
              role="carrotIMG"
              className={styles.carrot}
              src="/stats/goldenCarrot.png"
            />
          )}
        </div>
        <p role="pTag">
          {currentCount}/{dailyGoalAmount} Foods
        </p>
      </div>
      <div role="foodList" className={styles.columnRight}>
        <TodayFoodList currentDay={currentDay} />
      </div>
    </div>
  );
};

export default TodayGoalInfo;
