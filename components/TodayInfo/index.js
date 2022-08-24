import { VictoryPie } from "victory";

import populateDonutChartData from "../../utils/populateDonutChartData";
import TODAY_SAMPLE_FOOD_DATA from "../../sampleData/userSampleFoodData";

import styles from "./styles.module.css";

const TodayInfo = ({ uid }) => {
  const today = [
    "#fc7790",
    "#fd8f52",
    "#f3e28d",
    "#fef2d1",
    "#63dd92",
    "#9a7dcc",
    "#d1d0d0",
  ];

  let currentCount = TODAY_SAMPLE_FOOD_DATA.length;
  let user = {
    dailyGoal: 8,
  };

  const todaysData = populateDonutChartData(
    TODAY_SAMPLE_FOOD_DATA,
    user.dailyGoal
  );

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
          {currentCount >= user.dailyGoal && (
            <img className={styles.carrot} src="/stats/goldenCarrot.png" />
          )}
        </div>
        <p>
          {currentCount}/{user.dailyGoal} Foods
        </p>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.foodList}>
          {TODAY_SAMPLE_FOOD_DATA.map((food, index) => (
            <li style={{ color: food.textHex }} key={index + food.product}>
              {food.product}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodayInfo;
