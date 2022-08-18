import VerticalColorBreakdown from "../VerticalColorBreakdown";
import sampleFoodData from "../../sampleData/sampleFoodData";
import lastSevenDays from "../../utils/lastSevenDays";
import lastThirtyDays from "../../utils/lastThirtyDays";
import filterByDate from "../../utils/filterByDate";

import styles from "./styles.module.css";
import { useState } from "react";

const WeeklyConsumption = () => {
  let [days, setDays] = useState(7);
  let [width, setWidth] = useState("16px");

  let thirtyDays = lastThirtyDays(sampleFoodData);

  let verticalArr = [];
  for (let i = 0; i < days; i++) {
    verticalArr.push(
      <VerticalColorBreakdown
        arr={filterByDate(thirtyDays, new Date(), i)}
        width={width}
      />
    );
  }

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
        <div className={styles.barChartContainer}>{verticalArr}</div>
      </div>
    </div>
  );
};

export default WeeklyConsumption;
