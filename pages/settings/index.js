import Link from "next/link";

import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsInputs from "../../components/SettingsInputs";
import SettingsButtons from "../../components/SettingsButtons";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Settings</Heading1>
      <SettingsTopInfo />
      <SettingsInputs />
      <SettingsButtons />
      <BottomTabs />
    </div>
  );
};

export default SettingsPage;
