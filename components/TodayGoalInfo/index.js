import { VictoryPie } from "victory";

import populateDonutChartData from "../../utils/populateDonutChartData";

import styles from "./styles.module.css";

const TodayGoalInfo = ({ currentDay, user }) => {
  const {
    dailyGoal: { amount },
  } = user;

  const currentCount = 0;
  currentDay = [];
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
      <div className={styles.listContainer}>
        <div>
          <img className={styles.sunImg} src="/stats/sun.png" />
          <span>Today's Noms</span>
        </div>
        <ul className={styles.foodList}>
          {currentDay.map((food, index) => (
            <li style={{ color: food.textHex }} key={index + food.product}>
              {food.product}
            </li>
          ))}
        </ul>
        {!currentCount && (
          <img className={styles.listImg} src="/pageBackgrounds/confused.png" />
        )}
      </div>
    </div>
  );
};

export default TodayGoalInfo;
