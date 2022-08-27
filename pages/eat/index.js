import { useState, useEffect } from "react";
import dayjs from "dayjs";

import Heading1 from "../../components/Heading1";
import SearchFoodsForm from "../../components/SearchFoodsForm";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import Loading from "../../components/Loading";
import { useAuth } from "../../context/AuthContext";
import filterByDate from "../../utils/filterByDate";

import styles from "./styles.module.css";

const Eat = () => {
  const [currentDay, setCurrentDay] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

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
      setCurrentDay(currentDay);
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
        <Heading1>What are you eating?</Heading1>
        <SearchFoodsForm user={user} currentDay={currentDay} />
        <BottomTabs isEat={true} />
      </div>
    </WithProtected>
  );
};

export default Eat;
