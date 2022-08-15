import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase.js";

import styles from "./styles.module.css";

const CreateAccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form
      className={styles.form}
      action="/today"
      method="post"
      onSubmit={handleCreateAccount}
    >
      <input
        className={styles.formInput}
        type="text"
        name="firstName"
        placeholder="First Name"
      />
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <input type="submit" value="Sign Up" className={styles.inputButton} />
    </form>
  );
};

export default CreateAccountForm;
