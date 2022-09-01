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
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      );
      setSubject("");
      setMessage("");
      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.parentContainer}>
      <p className={styles.pTag}>Send us your feedback!</p>
      <form
        className={styles.container}
        onSubmit={handleSendEmail}
        autoComplete="off"
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
          onFocus={() => setIsSubmitted(false)}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.buttonPair}>
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
