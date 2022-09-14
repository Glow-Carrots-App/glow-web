import { useState } from "react";

import UserModel from "../../model/user";

import styles from "./styles.module.css";

const SettingsNameForm = ({ user }) => {
  const [newName, setNewName] = useState(user.firstName);
  const [isNameSaved, setIsNameSaved] = useState(false);
  const [error, setError] = useState("");

  const handleNewName = async (e) => {
    try {
      setError("");
      setIsNameSaved(true);
      e.preventDefault();
      await UserModel.updateName(user.uid, newName);
    } catch (err) {
      setIsNameSaved(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleNewName} role="form">
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
        <input
          type="submit"
          className={
            !isNameSaved ? styles.inputButton : styles.inputButtonSaved
          }
          value={!isNameSaved ? "Save" : "Saved!"}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default SettingsNameForm;
