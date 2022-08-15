import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const ChangePasswordForm = () => {
  return (
    <form className={styles.container} action="/settings" mode="post">
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
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <input
          className={styles.signInButtons}
          type="submit"
          name="savePassword"
          value="Save"
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
