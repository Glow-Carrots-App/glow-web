import { useState } from "react";

import { useAuth } from "../../context/AuthContext.js";
import UserModel from "../../model/user";
import {
  validateEmailRegex,
  validateEmailMsg,
} from "../../utils/validateEmail.js";
import CreateAccountPasswordInput from "../CreateAccountPasswordInput/index.js";

import styles from "./styles.module.css";
import createNewUserDataModel from "../../utils/createNewUserDataModel.js";

const CreateAccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signup(email, password);
      const newUser = createNewUserDataModel(email, firstName, user.uid);
      await UserModel.createUser(newUser);
    } catch (err) {
      setError("Email already in use.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleCreateAccount}>
      <input
        className={styles.formInput}
        type="text"
        placeholder="First Name"
        autoComplete="name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="text"
        placeholder="Email"
        autoComplete="email"
        pattern={validateEmailRegex}
        value={email}
        onChange={(e) => {
          e.target.setCustomValidity("");
          setEmail(e.target.value);
        }}
        onInvalid={(e) => e.target.setCustomValidity(validateEmailMsg)}
      />
      <CreateAccountPasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Password"
      />
      <CreateAccountPasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        placeholder="Confirm Password"
      />
      {error && <p className={styles.error}>{error}</p>}
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
