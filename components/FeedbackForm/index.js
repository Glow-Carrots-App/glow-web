import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const FeedbackForm = () => {
  return (
    <form className={styles.container} action="/settings" mode="post">
      <label for="subject">Subject</label>
      <input
        id="subject"
        type="text"
        name="subjectText"
        placeholder="Type here"
      />
      <label for="message">Message</label>
      <textarea
        id="message"
        type="text"
        name="messageText"
        placeholder="Type here"
      />
      <div className={styles.feedbackButtonPair}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <input
          className={styles.feedbackButtons}
          type="submit"
          name="submitMessage"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
