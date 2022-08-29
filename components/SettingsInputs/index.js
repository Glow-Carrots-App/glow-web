import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";

import styles from "./styles.module.css";

const SettingsInputs = ({ user }) => {
  const [newName, setNewName] = useState(firstName);
  const [newEmail, setNewEmail] = useState(email);
  const [password, setPassword] = useState("");

  const [isNameSaved, setIsNameSaved] = useState(false);
  const [isEmailSaved, setIsEmailSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { firstName, email, uid } = user;
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
    <form className={styles.container}>
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
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        className={styles.password}
        style={!showPassword ? { display: "none" } : null}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <div className={styles.inputButtonPair}>
        <input
          className={styles.input}
          id="email"
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          onFocus={() => {
            setIsEmailSaved(false);
            setPassword("");
            setShowPassword(true);
          }}
        />
        <button
          className={
            !isEmailSaved ? styles.inputButton : styles.inputButtonSaved
          }
          onClick={handleNewEmail}
        >
          {!isEmailSaved ? "Save" : "Saved!"}
        </button>
      </div>
    </form>
  );
};

export default SettingsInputs;
