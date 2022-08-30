import { useState } from "react";

import UserModel from "../../model/user";

import styles from "./styles.module.css";

const SettingsNameForm = ({ user }) => {
  const [newName, setNewName] = useState(user.firstName);
  const [isNameSaved, setIsNameSaved] = useState(false);

  const handleNewName = async (e) => {
    try {
      e.preventDefault();
      await UserModel.updateName(user.uid, newName);
      setIsNameSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleNewName}>
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
    </form>
  );
};

export default SettingsNameForm;
