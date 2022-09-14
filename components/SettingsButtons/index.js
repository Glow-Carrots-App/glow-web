import LargeLinkedButton from "../LargeLinkedButton";

import styles from "./styles.module.css";

const SettingsButtons = () => {
  return (
    <div className={styles.container}>
      <LargeLinkedButton href="/settings/change-goal">
        Edit Daily Goal
      </LargeLinkedButton>
      <LargeLinkedButton href="/settings/feedback">Feedback</LargeLinkedButton>
      <LargeLinkedButton href="/settings/password">
        Change Password
      </LargeLinkedButton>
      <LargeLinkedButton href="/settings/logout">Log Out</LargeLinkedButton>
      <LargeLinkedButton href="/settings/delete-account">
        Delete Account
      </LargeLinkedButton>
      <LargeLinkedButton href="/settings/about">About Glow</LargeLinkedButton>
    </div>
  );
};

export default SettingsButtons;
