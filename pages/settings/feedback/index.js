import { useState, useEffect } from "react";

import { useAuth } from "../../../context/AuthContext";
import PageContainer from "../../../components/PageContainer";
import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";
import Loading from "../../../components/Loading";
import UserModel from "../../../model/user";

import styles from "./styles.module.css";

const FeedbackPage = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { authedUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        setLoading(false);
        return;
      }
      const { uid } = authedUser;
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
      <PageContainer>
        <img
          src="/pageBackgrounds/artichoke.png"
          className={styles.artichoke}
        />
        <Heading1>Feedback</Heading1>
        <p className={styles.text}>Send us your feedback!</p>
        <FeedbackForm user={user} />
        <BottomTabs />
      </PageContainer>
    </WithProtected>
  );
};

export default FeedbackPage;
