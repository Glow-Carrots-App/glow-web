import { useEffect, useState } from "react";

import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import { useAuth } from "../../context/AuthContext";
import withProtected from "../../routers/withProtected";

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
      <Heading1>Profile</Heading1>
      <UserInfo user={user} />
      <Statistics user={user} lifetimeFoodHistory={lifetimeFoodHistory} />
      <ColorBreakdown lifetimeFoodHistory={lifetimeFoodHistory} />
      <BottomTabs isProfile={true} />
    </div>
  );
};

export default withProtected(ProfilePage);
