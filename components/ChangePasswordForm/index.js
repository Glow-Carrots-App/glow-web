import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <form className={styles.container} action="/settings" mode="post">
      <Link href="/settings">
        <a className={styles.doneLink}>
          <img src="/buttonIcons/reply1.png" />
        </a>
      </Link>
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
        <button>Reset</button>
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
