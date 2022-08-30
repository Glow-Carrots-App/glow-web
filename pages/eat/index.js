import { useState, useEffect } from "react";
import dayjs from "dayjs";

import Heading1 from "../../components/Heading1";
import SearchFoodsForm from "../../components/SearchFoodsForm";
import BottomTabs from "../../components/BottomTabs";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import Loading from "../../components/Loading";
import filterByDate from "../../utils/filterByDate";
import withProtected from "../../routers/withProtected";
import Sidebar from "../../components/Sidebar";

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
      const today = dayjs().format("YYYY/MM/DD");
      const dateToCompare = dayjs().subtract(29, "day").format("YYYY/MM/DD");
      const thirtyDayHistoryResponse = await FoodEntryModel.getThirtyDayHistory(
        uid,
        today,
        dateToCompare
      );
      const currentDay = filterByDate(thirtyDayHistoryResponse, 0);
      const userResponse = await UserModel.getUser(uid);
      setCurrentDay(currentDay);
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
      <SearchFoodsForm user={user} currentDay={currentDay} />
      <BottomTabs isEat={true} />
    </div>
  );
};

export default withProtected(Eat);
