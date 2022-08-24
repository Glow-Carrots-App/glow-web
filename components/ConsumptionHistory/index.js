import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import SAMPLE_FOOD_DATA from "../../sampleData/userSampleFoodData";
import VerticalColorBreakdown from "../VerticalColorBreakdown";
import organizeHistory from "../../utils/organizeHistory";

import styles from "./styles.module.css";

const ConsumptionHistory = ({ uid }) => {
  let [days, setDays] = useState(7);

  const {
    authedUser: { uid },
  } = useAuth();

  let history = organizeHistory(SAMPLE_FOOD_DATA, days);

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
        <div className={styles.barChartImg} />
        <div className={styles.barChartContainer}>
          {history.dayArrays.map((day, i) => (
            <VerticalColorBreakdown
              key={`${day} + ${i}`}
              arr={day}
              days={days}
              height={history.percentages[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumptionHistory;
