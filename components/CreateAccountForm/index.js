// import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase.js";

import styles from "./styles.module.css";

const CreateAccountForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleCreateAccount = () => {
    // e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("SUCCESS");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR");
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
        id="firstName"
      />
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email"
        id="email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        id="confirmPassword"
      />
      <input type="submit" value="Sign Up" className={styles.inputButton} />
    </form>
  );
};

export default CreateAccountForm;
