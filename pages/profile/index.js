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
        console.log("in error");
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
      <Sidebar page="profile" data-testid="Sidebar" />
      <Heading1>Profile</Heading1>
      {hasError ? (
        <p className={styles.error}>
          Something went wrong. Please refresh the page.
        </p>
      ) : (
        <>
          <div className={styles.leftColumn}>
            <ProfileUserInfo user={user} data-testid="ProfileUserInfo" />
            <ProfileStatistics
              user={user}
              lifetimeFoodHistory={lifetimeFoodHistory}
              data-testid="ProfileStatistics"
            />
            <ProfileGraph
              lifetimeFoodHistory={lifetimeFoodHistory}
              data-testid="ProfileGraph"
            />
          </div>
          <div className={styles.rightColumn}>
            <TodayUserInfo user={user} data-testid="TodayUserInfo" />
            <TodayFoodList
              currentDay={currentDay}
              data-testid="TodayFoodList"
            />
            <AddButton data-testid="AddButton" />
          </div>
        </>
      )}
      <BottomTabs isProfile={true} data-testid="BottomTabs" />
    </div>
  );
};

export default withProtected(ProfilePage);
