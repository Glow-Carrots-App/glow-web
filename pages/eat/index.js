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

import styles from "./styles.module.css";

const Eat = () => {
  const [currentDay, setCurrentDay] = useState([]);
  const [user, setUser] = useState();
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
      const currentDayResponse = await FoodEntryModel.getCurrentDay(uid, today);
      const userResponse = await UserModel.getUser(uid);
      setCurrentDay(currentDayResponse);
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
