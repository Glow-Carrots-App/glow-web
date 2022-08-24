import { useAuth } from "../../context/AuthContext";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <form className={styles.container} action="/settings" mode="post">
      <input
        className={styles.passwordFields}
        type="password"
        name="oldPassword"
        placeholder="Old Password"
      />
      <input
        className={styles.passwordFields}
        type="password"
        name="newPassword"
        placeholder="New Password"
      />
      <input
        className={styles.passwordFields}
        type="password"
        name="confirmNewPassword"
        placeholder="Confirm New Password"
      />
      <div className={styles.passwordButtonPair}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <input
          className={styles.passwordButton}
          type="submit"
          name="savePassword"
          value="Save"
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
