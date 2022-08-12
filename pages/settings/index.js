import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsInputs from "../../components/SettingsInputs";
import Heading1 from "../../components/Heading1";

import styles from "./styles.module.css";

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.doneLink}>Done</p>
      <Heading1>Settings</Heading1>
      <SettingsTopInfo />
      <SettingsInputs />
    </div>
  );
};

export default SettingsPage;
