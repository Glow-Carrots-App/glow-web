import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const FeedbackForm = () => {
  return (
    <form className={styles.container} action="/settings" mode="post">
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        type="text"
        name="subjectText"
        placeholder="Type here"
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        type="text"
        name="messageText"
        placeholder="Type here"
      />
      <div className={styles.buttonPair}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <input
          className={styles.submitButton}
          type="submit"
          name="submitMessage"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
