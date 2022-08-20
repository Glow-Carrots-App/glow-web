import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const FeedbackPage = () => {
  return (
    <div className={styles.container}>
      <img src="/pageBackgrounds/artichoke.png" className={styles.artichoke} />
      <Heading1>Feedback</Heading1>
      <p>Send us your feedback!</p>
      <FeedbackForm />
      <BottomTabs />
    </div>
  );
};

export default FeedbackPage;
