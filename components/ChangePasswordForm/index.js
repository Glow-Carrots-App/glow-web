import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const {
    authedUser: { uid },
    changePassword,
  } = useAuth();

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    changePassword(newPassword);
    //change style
  };

  return (
    <form
      id="passwordForm"
      className={styles.container}
      action="/settings"
      mode="post"
    >
      <input
        className={styles.passwordFields}
        type="password"
        name="oldPassword"
        value={oldPassword}
        placeholder="Old Password"
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        className={styles.passwordFields}
        type="password"
        name="newPassword"
        value={newPassword}
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        className={styles.passwordFields}
        type="password"
        name="confirmNewPassword"
        value={confirmNewPassword}
        placeholder="Confirm New Password"
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />
      <div className={styles.passwordButtonPair}>
        <button type="reset" className={styles.resetButton}>
          Reset
        </button>
        <input
          // className={
          //   //if new password added to FB, change value to "Saved"
          //   //else stay same style
          // }
          className={styles.passwordButton}
          type="submit"
          value="Save"
          onClick={handlePasswordUpdate}
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
