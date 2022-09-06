import { useState, useEffect } from "react";

import Heading1 from "../../components/Heading1";
import EatFoodsForm from "../../components/EatFoodsForm";
import BottomTabs from "../../components/BottomTabs";
import FoodEntryModel from "../../model/foodEntry";
import Loading from "../../components/Loading";
import withProtected from "../../routers/withProtected";
import Sidebar from "../../components/Sidebar";
import TodayUserInfo from "../../components/TodayUserInfo";
import TodayFoodList from "../../components/TodayFoodList";

import styles from "./styles.module.css";

const Eat = ({ user }) => {
  const [currentDay, setCurrentDay] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { uid } = user;
        const currentDayHistoryResponse =
          await FoodEntryModel.getCurrentDayHistory(ui);
        setCurrentDay(currentDayHistoryResponse);
      } catch (err) {
        setCurrentDay([]);
        setHasError(true);
      }
    }
    fetchData();
  }, []);

  if (!currentDay) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <Sidebar page="eat" />
      <Heading1>What are you eating?</Heading1>
      {hasError ? (
        <p className={styles.error}>
          Something went wrong. Please refresh the page.
        </p>
      ) : (
        <>
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
        </>
      )}
      <BottomTabs isEat={true} />
    </div>
  );
};

export default withProtected(Eat);
