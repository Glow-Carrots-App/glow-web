import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { useAuth } from "../../context/AuthContext";
import FoodEntryModel from "../../model/foodEntry";
import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import ConsumptionHistory from "../../components/ConsumptionHistory";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";

import styles from "./styles.module.css";

const Today = () => {
  const [currentDay, setCurrentDay] = useState([]);
  const { authedUser } = useAuth();
  const uid = authedUser?.uid ? authedUser.uid : null;

  useEffect(() => {
    async function fetchData() {
      if (!uid) {
        return;
      }
      const today = dayjs().format("YYYY/MM/DD");
      const currentDayResponse = await FoodEntryModel.getCurrentDay(uid, today);
      setCurrentDay(currentDayResponse);
    }
    fetchData();
  }, []);

  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Today</Heading1>
        <TodayInfo currentDay={currentDay} />
        <ConsumptionHistory />
        <BottomTabs isToday={true} />
      </div>
    </WithProtected>
  );
};

export default Today;
