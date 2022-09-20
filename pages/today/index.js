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
import AddButton from "../../components/AddButton";
import filterByDate from "../../utils/filterByDate";
import filterByDateRange from "../../utils/filterByDateRange";

import styles from "./styles.module.css";

const Today = ({ user }) => {
  const [currentDay, setCurrentDay] = useState();
  const [thirtyDayFoodHistory, setThirtyDayFoodHistory] = useState();
  const [lifetimeFoodHistory, setLifetimeFoodHistory] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("today page fetching data...");
        const today = dayjs().format("YYYY/MM/DD");
        const { isDailyGoalComplete, lastGoalDate, uid } = user;
        const lifetimeHistoryResponse = await FoodEntryModel.getLifetimeHistory(
          uid
        );
        console.log("lifetimeHistoryResponse: ", lifetimeHistoryResponse);
        const thirtyDayHistory = filterByDateRange(lifetimeHistoryResponse, 29);
        const currentDay = filterByDate(thirtyDayHistory, 0);
        if (dayjs(today).diff(lastGoalDate, "day") >= 2) {
          await UserModel.clearDayStreak(uid);
        }
        if (isDailyGoalComplete && currentDay.length === 0) {
          await UserModel.updateGoalIsComplete(uid, false);
        }
        setCurrentDay(currentDay);
        setThirtyDayFoodHistory(thirtyDayHistory);
        setLifetimeFoodHistory(lifetimeHistoryResponse);
      } catch (err) {
        console.log("today page error...");
        setHasError(true);
        setCurrentDay([]);
        setThirtyDayFoodHistory([]);
      }
    }
    fetchData();
  }, []);

  if (!currentDay || !thirtyDayFoodHistory || !user) {
    console.log("today page loading...");
    console.log(
      "currentDay: ",
      currentDay,
      "|| thirtyDayFoodHistory: ",
      thirtyDayFoodHistory,
      "|| user: ",
      user
    );
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Sidebar page="today" />
      <Heading1>Today</Heading1>
      {hasError ? (
        <p className={styles.error}>
          Something went wrong. Please refresh the page.
        </p>
      ) : (
        <>
          <div className={styles.todayColumnLeft}>
            <TodayGoalInfo currentDay={currentDay} user={user} />
            <TodayGraph thirtyDayFoodHistory={thirtyDayFoodHistory} />
          </div>
          <div className={styles.todayColumnRight}>
            <TodayUserInfo user={user} />
            <TodayStatistics
              user={user}
              lifetimeFoodHistory={lifetimeFoodHistory}
            />
            <AddButton />
          </div>
        </>
      )}
      <BottomTabs isToday={true} />
    </div>
  );
};

export default withProtected(Today);
