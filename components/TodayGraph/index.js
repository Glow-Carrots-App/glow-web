import { useState } from "react";

import TodayVerticalBar from "../TodayVerticalBar";
import organizeFoodHistory from "../../utils/organizeFoodHistory";

import styles from "./styles.module.css";

const TodayGraph = ({ foodHistory }) => {
  let [numberOfDays, setNumberOfDays] = useState(7);
  let organizedFoodHistory = organizeFoodHistory(foodHistory, numberOfDays);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setNumberOfDays(7);
          }}
          className={styles.button}
          disabled={numberOfDays === 7}
        >
          7 days
        </button>
        <button
          onClick={() => {
            setNumberOfDays(14);
          }}
          className={styles.button}
          disabled={numberOfDays === 14}
        >
          14 days
        </button>
        <button
          onClick={() => {
            setNumberOfDays(30);
          }}
          className={styles.button}
          disabled={numberOfDays === 30}
        >
          30 days
        </button>
      </div>
      <div className={styles.barChart}>
        <div className={styles.barChartImg} />
        <div className={styles.barChartContainer}>
          {organizedFoodHistory.days.map((day, i) => (
            <TodayVerticalBar
              key={`${day} + ${i}`}
              day={day}
              numberOfDays={numberOfDays}
              height={organizedFoodHistory.percentages[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayGraph;
