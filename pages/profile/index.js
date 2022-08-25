import { useEffect, useState } from "react";

import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";
import Loading from "../../components/Loading";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const ProfilePage = () => {
  const { authedUser } = useAuth();

  const uid = authedUser?.uid ? authedUser.uid : null;

  const [user, setUser] = useState();
  const [lifetimeFoods, setLifetimeFoods] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!uid) {
        setLoading(false);
        return;
      }
      const userResponse = await UserModel.getUser(uid);
      const foodResponse = await FoodEntryModel.getLifetimeHistory(uid);
      setUser(userResponse);
      setLifetimeFoods(foodResponse);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Profile</Heading1>
        <UserInfo user={user} />
        <Statistics user={user} lifetimeFoods={lifetimeFoods} />
        <ColorBreakdown lifetimeFoods={lifetimeFoods} />
        <BottomTabs isProfile={true} />
      </div>
    </WithProtected>
  );
};

export default ProfilePage;
