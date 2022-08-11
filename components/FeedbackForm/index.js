import Link from "next/link";

import styles from "./styles.module.css";

const FeedbackForm = () => {
  return (
    <form className={styles.container}>
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
        <Link href="/settings">
          <a>
            <input
              className={styles.feedbackButtons}
              type="button"
              name="cancelMessage"
              value="Cancel"
            />
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <input
              className={styles.feedbackButtons}
              type="submit"
              name="submitMessage"
              value="Submit"
            />
          </a>
        </Link>
      </div>
    </form>
  );
};

export default FeedbackForm;
