import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";
import {
  validateEmailRegex,
  validateEmailMsg,
} from "../../utils/validateEmail";

import styles from "./styles.module.css";

const SettingsInputs = ({ user }) => {
  const { firstName, email, uid } = user;
  const [newName, setNewName] = useState(firstName);
  const [newEmail, setNewEmail] = useState(email);
  const [password, setPassword] = useState("");

  const [isNameSaved, setIsNameSaved] = useState(false);
  const [isEmailSaved, setIsEmailSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { reauthenticate, changeEmail } = useAuth();

  const handleNewName = async (e) => {
    try {
      e.preventDefault();
      await UserModel.updateName(uid, newName);
      setIsNameSaved(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleNewEmail = async (e) => {
    try {
      e.preventDefault();
      await reauthenticate(password);
      await changeEmail(newEmail);
      await UserModel.updateEmail(uid, newEmail);
      setIsEmailSaved(true);
      setShowPassword(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleNewEmail}>
      <label htmlFor="text">Name</label>
      <div className={styles.inputButtonPair}>
        <input
          className={styles.input}
          id="text"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onFocus={() => setIsNameSaved(false)}
        />
        <button
          className={
            !isNameSaved ? styles.inputButton : styles.inputButtonSaved
          }
          onClick={handleNewName}
        >
          {!isNameSaved ? "Save" : "Saved!"}
        </button>
      </div>
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
          placeholder="Password"
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
          onChange={(e) => {
            e.target.setCustomValidity("");
            setNewEmail(e.target.value);
          }}
          onFocus={() => {
            setIsEmailSaved(false);
            setPassword("");
            setShowPassword(true);
          }}
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

export default SettingsInputs;
