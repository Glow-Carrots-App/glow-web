import emailjs from "emailjs-com";
import Link from "next/link";
import { useState } from "react";

import styles from "./styles.module.css";

const FeedbackForm = ({ user }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitted(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      );
      setSubject("");
      setMessage("");
    } catch (err) {
      setIsSubmitted(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container} role="container">
      <p role="helperText">Send us your feedback!</p>
      <form
        className={styles.formContainer}
        onSubmit={handleSendEmail}
        autoComplete="off"
        role="form"
      >
        <Link href="/settings">
          <a className={styles.doneLink}>
            <img src="/buttonIcons/back.png" />
          </a>
        </Link>
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
          id="subject"
          type="text"
          name="subject"
          placeholder="Type here"
          value={subject}
          role="subjectInput"
          onFocus={() => setIsSubmitted(false)}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Type here"
          value={message}
          role="messageInput"
          onFocus={() => setIsSubmitted(false)}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.buttonPair} role="buttonContainer">
          <button
            className={styles.resetButton}
            onClick={() => {
              setSubject("");
              setMessage("");
            }}
          >
            Reset
          </button>
          <input
            className={styles.submitButton}
            role="submit"
            type="submit"
            disabled={!subject || !message}
            value={isSubmitted ? "Submitted!" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
