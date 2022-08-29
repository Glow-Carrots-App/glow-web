import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [isPasswordSaved, setIsPasswordSaved] = useState(false);

  const {
    authedUser: { uid },
    changePassword,
  } = useAuth();

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    await changePassword(newPassword);
    setIsPasswordSaved(true);
  };

  return (
    <form id="passwordForm" className={styles.container}>
      <input
        className={styles.inputFields}
        type="password"
        name="oldPassword"
        value={oldPassword}
        placeholder="Old Password"
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        className={styles.inputFields}
        type="password"
        name="newPassword"
        value={newPassword}
        placeholder="New Password"
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        className={styles.inputFields}
        type="password"
        name="confirmNewPassword"
        value={confirmNewPassword}
        placeholder="Confirm New Password"
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
