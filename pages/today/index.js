import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { useAuth } from "../../context/AuthContext";
import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";
import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import ConsumptionHistory from "../../components/ConsumptionHistory";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import WithProtected from "../../components/WithProtected";

import styles from "./styles.module.css";
import filterByDate from "../../utils/filterByDate";

const Today = () => {
  const [currentDay, setCurrentDay] = useState([]);
  const [foodHistory, setFoodHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const { authedUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        setLoading(false);
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
      const currentDay = filterByDate(thirtyDayHistoryResponse, 0);
      const userResponse = await UserModel.getUser(uid);
      const {
        dailyGoal: { isComplete, lastGoalDate },
      } = userResponse;

      if (dayjs(today).diff(lastGoalDate, "day") >= 2) {
        await UserModel.clearDayStreak(uid);
      }

      if (isComplete && currentDay.length === 0) {
        await UserModel.updateGoalIsComplete(uid, false);
      }

      setCurrentDay(currentDay);
      setFoodHistory(thirtyDayHistoryResponse);
      setLoading(false);
      setUser(userResponse);
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
        <TodayInfo currentDay={currentDay} user={user} />
        <ConsumptionHistory foodHistory={foodHistory} />
        <BottomTabs isToday={true} />
      </div>
    </WithProtected>
  );
};

export default Today;
