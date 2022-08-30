import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import UserModel from "../../../model/user";
import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1/index";
import Heading2 from "../../../components/Heading2";
import ChangeGoalForm from "../../../components/ChangeGoalForm";
import Loading from "../../../components/Loading";
import BottomTabs from "../../../components/BottomTabs/index";
import withProtected from "../../../routers/withProtected";

import styles from "./styles.module.css";

const ChangeGoal = ({ authedUser }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        return;
      }
      const { uid } = authedUser;
      const userResponse = await UserModel.getUser(uid);
      setUser(userResponse);
    }
    fetchData();
  }, []);

  if (!user) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <img src="/pageBackgrounds/berries.png" className={styles.berry} />
      <Heading1>Daily Goal</Heading1>
      <Heading2>
        How many healthy foods <br />
        do you want to eat each day?
      </Heading2>
      <ChangeGoalForm user={user} />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(ChangeGoal);
