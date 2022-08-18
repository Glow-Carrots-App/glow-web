import VerticalColorBreakdown from "../VerticalColorBreakdown";
import sampleFoodData from "../../sampleData/sampleFoodData";
import filterByDate from "../../utils/filterByDate";
import createHeightPercentages from "../../utils/createHeightPercentages";

import styles from "./styles.module.css";
import { useState } from "react";

const ConsumptionHistory = () => {
  let [days, setDays] = useState(7);
  let [width, setWidth] = useState("16px");

  let dayArrays = [];
  let lengths = [];
  for (let i = 0; i < days; i++) {
    dayArrays.push(filterByDate(sampleFoodData, new Date(), i));
    lengths.push(dayArrays[i].length);
  }

  let percentages = createHeightPercentages(lengths);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setDays(7);
            setWidth("16px");
          }}
        >
          7 days
        </button>
        <button
          onClick={() => {
            setDays(14);
            setWidth("8px");
          }}
        >
          14 days
        </button>
        <button
          onClick={() => {
            setDays(30);
            setWidth("4px");
          }}
        >
          30 days
        </button>
      </div>
      <div className={styles.barChart}>
        <div className={styles.barChartContainer}>
          {dayArrays.map((day, i) => (
            <VerticalColorBreakdown
              arr={filterByDate(day, new Date(), i)}
              width={width}
              height={percentages[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumptionHistory;
