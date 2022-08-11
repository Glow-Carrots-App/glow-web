import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";

import styles from "./styles.module.css";

const FeedbackPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Feedback</Heading1>
      <p>Send us your feedback!</p>
      <FeedbackForm></FeedbackForm>
    </div>
  );
};

export default FeedbackPage;
