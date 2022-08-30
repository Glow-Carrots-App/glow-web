import { useRef } from "react";
import emailjs from "emailjs-com";

import styles from "./styles.module.css";

const FeedbackForm = ({ user }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <form className={styles.container} ref={form} onSubmit={sendEmail}>
      <input
        className={styles.hiddenInputs}
        name="uid"
        defaultValue={user.uid}
      />
      <input
        className={styles.hiddenInputs}
        name="name"
        defaultValue={user.firstName}
      />
      <input
        className={styles.hiddenInputs}
        name="email"
        defaultValue={user.email}
      />
      <label htmlFor="subject">Subject</label>
      <input
        required
        id="subject"
        type="text"
        name="subject"
        placeholder="Type here"
      />
      <label htmlFor="message">Message</label>
      <textarea
        required
        id="message"
        type="text"
        name="message"
        placeholder="Type here"
      />
      <div className={styles.buttonPair}>
        <button className={styles.resetButton} type="reset">
          Reset
        </button>
        <input className={styles.submitButton} type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FeedbackForm;
