import { useState } from "react";

import SAMPLE_FOOD_DATA from "../../sampleData/sampleFoodData";
import VerticalColorBreakdown from "../VerticalColorBreakdown";
import filterByDate from "../../utils/filterByDate";
import createHeightPercentages from "../../utils/createHeightPercentages";

import styles from "./styles.module.css";

const ConsumptionHistory = () => {
  let [days, setDays] = useState(7);

  let dayArrays = [];
  let lengths = [];

  for (let i = 0; i < days; i++) {
    dayArrays.push(filterByDate(SAMPLE_FOOD_DATA, i));
    lengths.push(dayArrays[i].length);
  }

  let percentages = createHeightPercentages(lengths);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setDays(7);
          }}
          className={styles.button}
          disabled={days === 7}
        >
          7 days
        </button>
        <button
          onClick={() => {
            setDays(14);
          }}
          className={styles.button}
          disabled={days === 14}
        >
          14 days
        </button>
        <button
          onClick={() => {
            setDays(30);
          }}
          className={styles.button}
          disabled={days === 30}
        >
          30 days
        </button>
      </div>
      <div className={styles.barChart}>
        <div className={styles.barChartContainer}>
          {dayArrays.map((day, i) => (
            <VerticalColorBreakdown
              key={`${day} + ${i}`}
              arr={day}
              days={days}
              height={percentages[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumptionHistory;
