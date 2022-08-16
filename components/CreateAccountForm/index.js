import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext.js";

import styles from "./styles.module.css";

const CreateAccountForm = () => {
  const { user, signup } = useAuth();
  console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      router.push("/today");
    } catch (err) {
      console.log(err);
    }
    console.log(email, password);
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
