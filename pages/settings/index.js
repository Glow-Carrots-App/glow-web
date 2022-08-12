import SettingsInputs from "../../components/SettingsInputs";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Settings</Heading1>
      <SettingsInputs />
      <BottomTabs />
    </div>
  );
};

export default SettingsPage;
