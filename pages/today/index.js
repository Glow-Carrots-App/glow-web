import { useEffect, useState } from "react";
import dayjs from "dayjs";

import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";
import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import ConsumptionHistory from "../../components/ConsumptionHistory";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import withProtected from "../../routers/withProtected";
import Sidebar from "../../components/Sidebar";

import styles from "./styles.module.css";
import filterByDate from "../../utils/filterByDate";

const Today = ({ authedUser }) => {
  const [currentDay, setCurrentDay] = useState();
  const [foodHistory, setFoodHistory] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        return;
      }
      const { uid } = authedUser;
      const today = dayjs().format("YYYY/MM/DD");
      const dateToCompare = dayjs().subtract(29, "day").format("YYYY/MM/DD");
      const thirtyDayHistoryResponse = await FoodEntryModel.getThirtyDayHistory(
        uid,
        today,
        dateToCompare
      );
      const userResponse = await UserModel.getUser(uid);
      const currentDay = filterByDate(thirtyDayHistoryResponse, 0);
      const {
        dailyGoal: { isComplete, lastGoalDate },
      } = userResponse;

      if (dayjs(today).diff(lastGoalDate, "day") >= 2) {
        await UserModel.clearDayStreak(uid);
      }
      if (isComplete && currentDay.length === 0) {
        await UserModel.updateGoalIsComplete(uid, false);
      }

      setUser(userResponse);
      setCurrentDay(currentDay);
      setFoodHistory(thirtyDayHistoryResponse);
    }
    fetchData();
  }, []);

  if (!user || !currentDay || !foodHistory) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Heading1>Today</Heading1>
      <Sidebar page="today" />
      <div className={styles.contentContainer}>
        <TodayInfo currentDay={currentDay} user={user} />
        <ConsumptionHistory foodHistory={foodHistory} />
      </div>
      <BottomTabs isToday={true} />
    </div>
  );
};

export default withProtected(Today);
