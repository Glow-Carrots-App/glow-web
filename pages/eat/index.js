import { useState, useEffect } from "react";

import Heading1 from "../../components/Heading1";
import EatFoodsForm from "../../components/EatFoodsForm";
import BottomTabs from "../../components/BottomTabs";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import Loading from "../../components/Loading";
import withProtected from "../../routers/withProtected";
import Sidebar from "../../components/Sidebar";
import TodayUserInfo from "../../components/TodayUserInfo";
import TodayFoodList from "../../components/TodayFoodList";

import styles from "./styles.module.css";

const Eat = ({ authedUser }) => {
  const [currentDay, setCurrentDay] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        return;
      }
      const { uid } = authedUser;
      const currentDayHistoryResponse =
        await FoodEntryModel.getCurrentDayHistory(uid);
      const userResponse = await UserModel.getUser(uid);
      setCurrentDay(currentDayHistoryResponse);
      setUser(userResponse);
    }
    fetchData();
  }, []);

  if (!user) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <Sidebar page="eat" />
      <Heading1>What are you eating?</Heading1>
      <div className={styles.columnLeft}>
        <EatFoodsForm
          user={user}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
      </div>
      <div className={styles.columnRight}>
        <TodayUserInfo user={user} />
        <TodayFoodList currentDay={currentDay} />
      </div>
      <BottomTabs isEat={true} />
    </div>
  );
};

export default withProtected(Eat);
