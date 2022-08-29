import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [isPasswordSaved, setIsPasswordSaved] = useState(false);

  const { changePassword, reauthenticate } = useAuth();

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      await reauthenticate(oldPassword);
      await changePassword(newPassword);
      setIsPasswordSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.container}>
      <input style={{ display: "none" }} autoComplete="email" />
      <input
        className={styles.inputFields}
        type="password"
        id="oldPassword"
        value={oldPassword}
        placeholder="Old Password"
        autoComplete="current-password"
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        className={styles.inputFields}
        type="password"
        id="newPassword"
        value={newPassword}
        placeholder="New Password"
        autoComplete="new-password"
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        className={styles.inputFields}
        type="password"
        id="confirmNewPassword"
        value={confirmNewPassword}
        placeholder="Confirm New Password"
        autoComplete="new-password"
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />
      <div className={styles.buttonPair}>
        <button
          type="reset"
          className={styles.reset}
          onClick={() => {
            setOldPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          }}
        >
          Reset
        </button>
        <button
          disabled={
            newPassword && oldPassword && confirmNewPassword ? false : true
          }
          type="submit"
          className={styles.save}
          onClick={handlePasswordUpdate}
        >
          {!isPasswordSaved ? "Save" : "Saved!"}
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
