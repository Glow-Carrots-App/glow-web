import { useEffect, useState } from "react";

import Heading1 from "../../components/Heading1";
import ProfileUserInfo from "../../components/ProfileUserInfo";
import ProfileStatistics from "../../components/ProfileStatistics";
import ProfileGraph from "../../components/ProfileGraph";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import FoodEntryModel from "../../model/foodEntry";
import filterByDate from "../../utils/filterByDate";
import withProtected from "../../routers/withProtected";
import TodayFoodList from "../../components/TodayFoodList";
import AddButton from "../../components/AddButton";
import Sidebar from "../../components/Sidebar";

import styles from "./styles.module.css";
import TodayUserInfo from "../../components/TodayUserInfo";

const ProfilePage = ({ user }) => {
  const [lifetimeFoodHistory, setLifetimeFoodHistory] = useState();
  const [currentDay, setCurrentDay] = useState();
  const { uid } = user;

  useEffect(() => {
    async function fetchData() {
      const lifetimeResponse = await FoodEntryModel.getLifetimeHistory(uid);
      const currentDay = filterByDate(lifetimeResponse, 0);
      setLifetimeFoodHistory(lifetimeResponse);
      setCurrentDay(currentDay);
    }
    fetchData();
  }, []);

  if (!lifetimeFoodHistory || !currentDay) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Sidebar page="profile" />
      <Heading1>Profile</Heading1>
      <div className={styles.leftColumn}>
        <ProfileUserInfo user={user} />
        <ProfileStatistics
          user={user}
          lifetimeFoodHistory={lifetimeFoodHistory}
        />
        <ProfileGraph lifetimeFoodHistory={lifetimeFoodHistory} />
      </div>
      <div className={styles.rightColumn}>
        <TodayUserInfo user={user} />
        <TodayFoodList currentDay={currentDay} />
        <AddButton />
      </div>
      <BottomTabs isProfile={true} />
    </div>
  );
};

export default withProtected(ProfilePage);
