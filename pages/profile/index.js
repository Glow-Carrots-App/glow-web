import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Heading1 from "../../components/Heading1";
import ProfileUserInfo from "../../components/ProfileUserInfo";
import ProfileStatistics from "../../components/ProfileStatistics";
import ProfileGraph from "../../components/ProfileGraph";
import TodayUserInfo from "../../components/TodayUserInfo";
import TodayFoodList from "../../components/TodayFoodList";
import AddButton from "../../components/AddButton";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import FoodEntryModel from "../../model/foodEntry";
import filterByDate from "../../utils/filterByDate";
import withProtected from "../../routers/withProtected";

import styles from "./styles.module.css";

const ProfilePage = ({ user }) => {
  const [lifetimeFoodHistory, setLifetimeFoodHistory] = useState();
  const [currentDay, setCurrentDay] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { uid } = user;
        const lifetimeResponse = await FoodEntryModel.getLifetimeHistory(uid);
        const currentDay = filterByDate(lifetimeResponse, 0);
        setLifetimeFoodHistory(lifetimeResponse);
        setCurrentDay(currentDay);
      } catch (err) {
        setLifetimeFoodHistory([]);
        setCurrentDay([]);
        setHasError(true);
      }
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
      {hasError ? (
        <p className={styles.error}>
          Something went wrong. Please refresh the page.
        </p>
      ) : (
        <>
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
        </>
      )}
      <BottomTabs isProfile={true} />
    </div>
  );
};

export default withProtected(ProfilePage);
