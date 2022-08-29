import PageContainer from "../../../components/PageContainer";
import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const FeedbackPage = () => {
  return (
    <WithProtected>
      <PageContainer>
        <img
          src="/pageBackgrounds/artichoke.png"
          className={styles.artichoke}
        />
        <Heading1>Feedback</Heading1>
        <p className={styles.text}>Send us your feedback!</p>
        <FeedbackForm />
        <BottomTabs />
      </PageContainer>
    </WithProtected>
  );
};

export default FeedbackPage;
