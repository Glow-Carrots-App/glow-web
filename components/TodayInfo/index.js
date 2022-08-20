import { VictoryPie } from "victory";

import populateDonutChartData from "../../utils/populateDonutChartData";

import styles from "./styles.module.css";

const TodayInfo = () => {
  const today = [
    "#fc7790",
    "#fd8f52",
    "#f3e28d",
    "#fef2d1",
    "#63dd92",
    "#9a7dcc",
    "#d1d0d0",
  ];
  const todayEaten = [
    { product: "Strawberry", color: "red", fillHex: "#f94d4d" },
    { product: "Strawberry", color: "red", fillHex: "#f94d4d" },
    { product: "Banana", color: "yellow", fillHex: "#ffbb1c" },
    { product: "Orange", color: "orange", fillHex: "#fd8f52" },
    { product: "Banana", color: "yellow", fillHex: "#ffbb1c" },
    { product: "Onion", color: "white", fillHex: "#97906e" },
    { product: "Scallions", color: "green", fillHex: "#479d45" },
    { product: "Blueberry", color: "blue", fillHex: "#7471e7" },
  ];

  let currentCount = todayEaten.length;
  let user = {
    dailyGoal: 30,
  };

  const todaysData = populateDonutChartData(todayEaten, user.dailyGoal);

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
          {todayEaten.map((food, index) => (
            <li style={{ color: food.fillHex }} key={index + food.product}>
              {food.product}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodayInfo;
