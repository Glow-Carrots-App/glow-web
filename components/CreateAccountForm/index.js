import { useState } from "react";

import { useAuth } from "../../context/AuthContext.js";
import UserModel from "../../model/user";
import {
  validatePasswordRegex,
  validatePasswordMsg,
} from "../../utils/validatePassword";
import {
  validateEmailRegex,
  validateEmailMsg,
} from "../../utils/validateEmail.js";

import styles from "./styles.module.css";
import createNewUserDataModel from "../../utils/createNewUserDataModel.js";

const CreateAccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useAuth();

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signup(email, password);
      const newUser = createNewUserDataModel(email, firstName, user.uid);
      await UserModel.createUser(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleCreateAccount}>
      <input
        className={styles.formInput}
        type="text"
        name="firstName"
        placeholder="First Name"
        autoComplete="name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        pattern={validateEmailRegex}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onInvalid={(e) => e.target.setCustomValidity(validateEmailMsg)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        pattern={validatePasswordRegex}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onInvalid={(e) => e.target.setCustomValidity(validatePasswordMsg)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        pattern={validatePasswordRegex}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onInvalid={(e) => e.target.setCustomValidity(validatePasswordMsg)}
      />
      <input
        type="submit"
        value="Sign Up"
        className={styles.inputButton}
        disabled={
          !firstName ||
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword
        }
      />
    </form>
  );
};

export default CreateAccountForm;
