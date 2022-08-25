import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { VictoryPie } from "victory";

import { useAuth } from "../../context/AuthContext";
import FoodEntryModel from "../../model/foodEntry";
import populateDonutChartData from "../../utils/populateDonutChartData";

import styles from "./styles.module.css";

const TodayInfo = () => {
  const [currentDay, setCurrentDay] = useState([]);

  const {
    authedUser: { uid },
  } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const today = dayjs().format("YYYY/MM/DD");
      const currentDayResponse = await FoodEntryModel.getCurrentDay(uid, today);
      setCurrentDay(currentDayResponse);
    }
    fetchData();
  }, []);

  let user = {
    dailyGoal: 8,
  };

  const currentCount = currentDay.length;
  const todaysData = populateDonutChartData(currentDay, user.dailyGoal);
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
