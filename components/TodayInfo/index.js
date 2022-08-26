import { useEffect } from "react";
import { VictoryPie } from "victory";

import populateDonutChartData from "../../utils/populateDonutChartData";
import UserModel from "../../model/user";

import styles from "./styles.module.css";

const TodayInfo = ({ currentDay, user }) => {
  const {
    dailyGoal: { amount, isComplete },
    goldenCarrots,
    dayStreak,
    uid,
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

  useEffect(() => {
    if (amount === currentDay.length && !isComplete) {
      UserModel.incrementDayStreak(uid, dayStreak);
      UserModel.incrementGoldenCarrots(uid, goldenCarrots);
      UserModel.isGoalCompleteToTrue(uid);
    }
  }, []);

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
        <ul className={styles.foodList}>
          {currentDay.map((food, index) => (
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
