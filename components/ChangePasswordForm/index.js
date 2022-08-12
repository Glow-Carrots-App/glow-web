import Link from "next/link";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  return (
    <form className={styles.container}>
      <input
        className={styles.signInFields}
        type="password"
        name="oldPassword"
        placeholder="Old Password"
      />
      <input
        className={styles.signInFields}
        type="password"
        name="newPassword"
        placeholder="New Password"
      />
      <input
        className={styles.signInFields}
        type="password"
        name="confirmNewPassword"
        placeholder="Confirm New Password"
      />
      <div className={styles.signInButtonPair}>
        <Link href="/settings">
          <a>
            <input
              className={styles.signInButtons}
              type="button"
              name="cancelPassword"
              value="Cancel"
            />
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <input
              className={styles.signInButtons}
              type="submit"
              name="savePassword"
              value="Save"
            />
          </a>
        </Link>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
