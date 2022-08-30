import { useState } from "react";
import Link from "next/link";

import { useAuth } from "../../context/AuthContext";
import {
  validatePasswordRegex,
  validatePasswordMsg,
} from "../../utils/validatePassword";

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
    <form className={styles.container} onSubmit={handlePasswordUpdate}>
      <Link href="/settings">
        <a className={styles.doneLink}>
          <img src="/buttonIcons/back.png" />
        </a>
      </Link>
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
        pattern={validatePasswordRegex}
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => {
          e.target.setCustomValidity("");
          setNewPassword(e.target.value);
        }}
        onInvalid={(e) => e.target.setCustomValidity(validatePasswordMsg)}
      />
      <input
        className={styles.inputFields}
        type="password"
        id="confirmNewPassword"
        value={confirmNewPassword}
        placeholder="Confirm New Password"
        autoComplete="new-password"
        pattern={validatePasswordRegex}
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => {
          e.target.setCustomValidity("");
          setConfirmNewPassword(e.target.value);
        }}
        onInvalid={(e) => e.target.setCustomValidity(validatePasswordMsg)}
      />
      <div className={styles.buttonPair}>
        <button
          type="button"
          className={styles.reset}
          onClick={() => {
            setOldPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          }}
        >
          Reset
        </button>
        <input
          type="submit"
          value={!isPasswordSaved ? "Save" : "Saved!"}
          disabled={
            !newPassword ||
            !oldPassword ||
            !confirmNewPassword ||
            newPassword !== confirmNewPassword
          }
          className={styles.save}
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
