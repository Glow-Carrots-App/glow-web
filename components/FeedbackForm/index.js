import styles from "./styles.module.css";

const FeedbackForm = () => {
  return (
    <form className={styles.container}>
      <label>Subject</label>
      <input type="text" name="subjectText" placeholder="Type here" />
      <label>Message</label>
      <textarea type="text" name="messageText" placeholder="Type here" />
      <div className={styles.feedbackButtonPair}>
        <input
          className={styles.feedbackButtons}
          type="button"
          name="cancelMessage"
          value="Cancel"
        />
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
