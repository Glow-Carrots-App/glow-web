import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import UserModel from "../../../model/user";
import Heading1 from "../../../components/Heading1/index";
import Heading2 from "../../../components/Heading2";
import ChangeGoalForm from "../../../components/ChangeGoalForm";
import Loading from "../../../components/Loading";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const ChangeGoal = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { authedUser } = useAuth();
  const uid = authedUser?.uid ? authedUser.uid : null;

  useEffect(() => {
    async function fetchData() {
      if (!uid) {
        setLoading(false);
        return;
      }
      const userResponse = await UserModel.getUser(uid);
      setUser(userResponse);
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
        <Heading1>Daily Goal</Heading1>
        <img src="/pageBackgrounds/berries.png" className={styles.berry} />
        <Heading2>
          How many healthy foods <br />
          do you want to eat each day?
        </Heading2>
        <ChangeGoalForm user={user} />
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default ChangeGoal;
