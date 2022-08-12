import LargeLinkedButton from "../LargeLinkedButton";

import styles from "./styles.module.css";

const SettingsButtons = () => {
  return (
    <div className={styles.container}>
      <LargeLinkedButton href="/settings/change-goal">
        Edit Daily Goal
      </LargeLinkedButton>
      <LargeLinkedButton href="/settings/feedback">Feedback</LargeLinkedButton>
      <LargeLinkedButton href="/settings/logout">Log Out</LargeLinkedButton>
      <LargeLinkedButton href="/settings/delete-account">
        Delete Account
      </LargeLinkedButton>
    </div>
  );
};

export default SettingsButtons;
