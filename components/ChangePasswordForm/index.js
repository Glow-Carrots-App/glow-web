import { useState } from "react";
import Link from "next/link";

import { useAuth } from "../../context/AuthContext";
import ChangePasswordInput from "../ChangePasswordInput";

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

  const handleReset = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
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
        value={oldPassword}
        placeholder="Old Password"
        autoComplete="current-password"
        onFocus={() => setIsPasswordSaved(false)}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <ChangePasswordInput
        password={newPassword}
        setPassword={setNewPassword}
        setIsPasswordSaved={setIsPasswordSaved}
        placeholder="New Password"
      />
      <ChangePasswordInput
        password={confirmNewPassword}
        setPassword={setConfirmNewPassword}
        setIsPasswordSaved={setIsPasswordSaved}
        placeholder="Confirm New Password"
      />
      <div className={styles.buttonPair}>
        <button type="button" className={styles.reset} onClick={handleReset}>
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
