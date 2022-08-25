import { useState, useEffect } from "react";
import dayjs from "dayjs";

import { useAuth } from "../../context/AuthContext";
import FoodEntryModel from "../../model/foodEntry";
import VerticalColorBreakdown from "../VerticalColorBreakdown";
import organizeHistory from "../../utils/organizeHistory";

import styles from "./styles.module.css";

const ConsumptionHistory = () => {
  let [days, setDays] = useState(7);
  let [foodArr, setFoodArr] = useState([]);

  const {
    authedUser: { uid },
  } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const today = dayjs().format("YYYY/MM/DD");
      const dateToCompare = dayjs()
        .subtract(days - 1, "day")
        .format("YYYY/MM/DD");
      const foodArrResponse = await FoodEntryModel.getHistory(
        uid,
        today,
        dateToCompare
      );
      setFoodArr(foodArrResponse);
    }
    fetchData();
  }, [days]);

  let history = organizeHistory(foodArr, days);

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
          {history.dayArrays.map((dayArr, i) => (
            <VerticalColorBreakdown
              key={`${dayArr} + ${i}`}
              arr={dayArr}
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
