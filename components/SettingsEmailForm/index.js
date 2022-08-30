import { useState } from "react";

import UserModel from "../../model/user";
import { useAuth } from "../../context/AuthContext";
import {
  validateEmailRegex,
  validateEmailMsg,
} from "../../utils/validateEmail";

import styles from "./styles.module.css";

const SettingsEmailForm = ({ user }) => {
  const [newEmail, setNewEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [isEmailSaved, setIsEmailSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { reauthenticate, changeEmail } = useAuth();

  const handleNewEmail = async (e) => {
    try {
      e.preventDefault();
      await reauthenticate(password);
      await changeEmail(newEmail);
      await UserModel.updateEmail(user.uid, newEmail);
      setIsEmailSaved(true);
      setShowPassword(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnFocus = () => {
    setIsEmailSaved(false);
    setPassword("");
    setShowPassword(true);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleNewEmail}>
      <label
        htmlFor="password"
        style={!showPassword ? { display: "none" } : null}
      >
        Confirm password to change email:
      </label>
      <div className={styles.passwordContainer}>
        <input
          id="password"
          type="password"
          placeholder="Confirm Password"
          autoComplete="current-password"
          value={password}
          className={styles.password}
          style={!showPassword ? { display: "none" } : null}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <label htmlFor="email">Email</label>
      <div className={styles.inputButtonPair}>
        <input
          className={styles.input}
          id="email"
          autoComplete="email"
          type="email"
          pattern={validateEmailRegex}
          value={newEmail}
          onInvalid={(e) => e.target.setCustomValidity(validateEmailMsg)}
          onChange={(e) => {
            e.target.setCustomValidity("");
            setNewEmail(e.target.value);
          }}
          onFocus={handleOnFocus}
        />
        <input
          type="submit"
          className={
            !isEmailSaved ? styles.inputButton : styles.inputButtonSaved
          }
          value={!isEmailSaved ? "Save" : "Saved!"}
        />
      </div>
    </form>
  );
};

export default SettingsEmailForm;
