import { useRef } from "react";
import emailjs from "emailjs-com";

import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const FeedbackForm = () => {
  const {
    authedUser: { uid, email },
  } = useAuth();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };
  return (
    <form className={styles.container} ref={form} onSubmit={sendEmail}>
      <label htmlFor="subject">Subject</label>
      <input
        required
        id="subject"
        type="text"
        name="subjectText"
        placeholder="Type here"
      />
      <label htmlFor="message">Message</label>
      <textarea
        required
        id="message"
        type="text"
        name="messageText"
        placeholder="Type here"
      />
      <div className={styles.buttonPair}>
        <button type="reset">Reset</button>
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
