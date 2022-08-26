import { useState } from "react";

import UserModel from "../../model/user";

import styles from "./styles.module.css";

const SettingsInputs = ({ user }) => {
  const { firstName, email, uid } = user;
  const [newName, setNewName] = useState(firstName);
  const [newEmail, setNewEmail] = useState(email);

  const [isNameSaved, setIsNameSaved] = useState(false);
  const [isEmailSaved, setIsEmailSaved] = useState(false);

  const handleNewName = (e) => {
    e.preventDefault();
    UserModel.updateName(uid, newName);
    setIsNameSaved(true);
  };
  const handleNewEmail = (e) => {
    e.preventDefault();
    UserModel.updateEmail(uid, newEmail);
    setIsEmailSaved(true);
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
      <label htmlFor="email">Email</label>
      <div className={styles.inputButtonPair}>
        <input
          className={styles.input}
          id="email"
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          onFocus={() => setIsEmailSaved(false)}
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
