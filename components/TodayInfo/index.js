import { VictoryPie } from "victory";

import styles from "./styles.module.css";

const TodayInfo = () => {
  const today = [
    "#f94d4d",
    "#fd8f52",
    "#ffbb1c",
    "#97906e",
    "#479d45",
    "#7471e7",
    "#f1ecff",
  ];
  const data = [
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 0 },
    { x: " ", y: 10 },
  ];
  const todayEaten = [
    { product: "Strawberry", color: "red", fillHex: "#f94d4d" },
    { product: "Banana", color: "yellow", fillHex: "#ffbb1c" },
    { product: "Orange", color: "orange", fillHex: "#fd8f52" },
    { product: "Banana", color: "yellow", fillHex: "#ffbb1c" },
    { product: "Onion", color: "white", fillHex: "#97906e" },
    { product: "Scallions", color: "green", fillHex: "#479d45" },
    { product: "Blueberry", color: "blue", fillHex: "#7471e7" },
  ];

  const dataUpdate = (foodArr) => {
    foodArr.forEach((food) => {
      switch (food.color) {
        case "red":
          data[0].y++;
          break;
        case "orange":
          data[1].y++;
          break;
        case "yellow":
          data[2].y++;
          break;
        case "white":
          data[3].y++;
          break;
        case "green":
          data[4].y++;
          break;
        case "blue":
          data[5].y++;
          break;
      }
      if (data[6].y > 0) {
        console.log(data[6].y);
        data[6].y--;
      }
    });
  };

  dataUpdate(todayEaten);

  return (
    <div className={styles.container}>
      <div className={styles.goalContainer}>
        <div>
          <VictoryPie
            colorScale={today}
            padAngle={({ datum }) => datum}
            innerRadius={100}
            data={data}
          />
        </div>
        <p>4/10 Foods</p>
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
