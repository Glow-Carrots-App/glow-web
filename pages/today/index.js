import { useEffect, useState } from "react";
import dayjs from "dayjs";

import Sidebar from "../../components/Sidebar";
import Heading1 from "../../components/Heading1";
import TodayGoalInfo from "../../components/TodayGoalInfo";
import TodayGraph from "../../components/TodayGraph";
import TodayUserInfo from "../../components/TodayUserInfo";
import TodayStatistics from "../../components/TodayStatistics";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";
import withProtected from "../../routers/withProtected";

import styles from "./styles.module.css";
import filterByDate from "../../utils/filterByDate";

const Today = ({ authedUser }) => {
  const [currentDay, setCurrentDay] = useState();
  const [foodHistory, setFoodHistory] = useState();
  const [user, setUser] = useState();
  const [lifetimeFoodHistory, setLifetimeFoodHistory] = useState();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        return;
      }
      const { uid } = authedUser;
      const today = dayjs().format("YYYY/MM/DD");
      const dateToCompare = dayjs().subtract(29, "day").format("YYYY/MM/DD");
      const lifetimeResponse = await FoodEntryModel.getLifetimeHistory(uid);
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
      setLifetimeFoodHistory(lifetimeResponse);
    }
    fetchData();
  }, []);

  if (!user || !currentDay || !foodHistory) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Sidebar page="today" />
      <Heading1>Today</Heading1>
      <div className={styles.todayColumnLeft}>
        <TodayGoalInfo currentDay={currentDay} user={user} />
        <TodayGraph foodHistory={foodHistory} />
      </div>
      <div className={styles.todayColumnRight}>
        <TodayUserInfo user={user} />
        <TodayStatistics
          user={user}
          lifetimeFoodHistory={lifetimeFoodHistory}
        />
      </div>
      <BottomTabs isToday={true} />
    </div>
  );
};

export default withProtected(Today);
