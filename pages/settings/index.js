import SettingsInputs from "../../components/SettingsInputs";
import Heading1 from "../../components/Heading1";

import styles from "./styles.module.css";

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Settings</Heading1>
      <SettingsInputs></SettingsInputs>
    </div>
  );
};

export default SettingsPage;
