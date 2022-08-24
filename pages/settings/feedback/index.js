import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const FeedbackPage = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <img
          src="/pageBackgrounds/artichoke.png"
          className={styles.artichoke}
        />
        <Heading1>Feedback</Heading1>
        <p>Send us your feedback!</p>
        <FeedbackForm />
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default FeedbackPage;
