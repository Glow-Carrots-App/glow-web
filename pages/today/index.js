import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { useAuth } from "../../context/AuthContext";
import FoodEntryModel from "../../model/foodEntry";
import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import ConsumptionHistory from "../../components/ConsumptionHistory";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import WithProtected from "../../components/WithProtected";

import styles from "./styles.module.css";

const Today = () => {
  const [currentDay, setCurrentDay] = useState([]);
  const [foodHistory, setFoodHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { authedUser } = useAuth();
  const uid = authedUser?.uid ? authedUser.uid : null;

  useEffect(() => {
    async function fetchData() {
      if (!uid) {
        setLoading(false);
        return;
      }
      const today = dayjs().format("YYYY/MM/DD");
      const dateToCompare = dayjs().subtract(29, "day").format("YYYY/MM/DD");
      const currentDayResponse = await FoodEntryModel.getCurrentDay(uid, today);
      const thirtyDayHistoryResponse = await FoodEntryModel.getThirtyDayHistory(
        uid,
        today,
        dateToCompare
      );
      setCurrentDay(currentDayResponse);
      setFoodHistory(thirtyDayHistoryResponse);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Today</Heading1>
        <TodayInfo currentDay={currentDay} />
        <ConsumptionHistory foodHistory={foodHistory} />
        <BottomTabs isToday={true} />
      </div>
    </WithProtected>
  );
};

export default Today;
