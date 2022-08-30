import { useState, useEffect } from "react";

import { useAuth } from "../../../context/AuthContext";
import PageContainer from "../../../components/PageContainer";
import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import BottomTabs from "../../../components/BottomTabs";
import Loading from "../../../components/Loading";
import UserModel from "../../../model/user";
import withProtected from "../../../routers/withProtected";

import styles from "./styles.module.css";

const FeedbackPage = ({ authedUser }) => {
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
      <img src="/pageBackgrounds/artichoke.png" className={styles.artichoke} />
      <Heading1>Feedback</Heading1>
      <p className={styles.text}>Send us your feedback!</p>
      <FeedbackForm user={user} />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(FeedbackPage);
