import { useEffect, useState } from "react";

import Heading1 from "../../components/Heading1";
import ProfileUserInfo from "../../components/ProfileUserInfo";
import ProfileStatistics from "../../components/ProfileStatistics";
import ProfileGraph from "../../components/ProfileGraph";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import withProtected from "../../routers/withProtected";
import Sidebar from "../../components/Sidebar";

import styles from "./styles.module.css";

const ProfilePage = ({ authedUser }) => {
  const [user, setUser] = useState();
  const [lifetimeFoodHistory, setLifetimeFoodHistory] = useState();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        return;
      }
      const { uid } = authedUser;
      const userResponse = await UserModel.getUser(uid);
      const lifetimeResponse = await FoodEntryModel.getLifetimeHistory(uid);
      setUser(userResponse);
      setLifetimeFoodHistory(lifetimeResponse);
    }
    fetchData();
  }, []);

  if (!user || !lifetimeFoodHistory) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Sidebar page="profile" />
      <Heading1>Profile</Heading1>
      <ProfileUserInfo user={user} />
      <ProfileStatistics
        user={user}
        lifetimeFoodHistory={lifetimeFoodHistory}
      />
      <ProfileGraph lifetimeFoodHistory={lifetimeFoodHistory} />
      <BottomTabs isProfile={true} />
    </div>
  );
};

export default withProtected(ProfilePage);
