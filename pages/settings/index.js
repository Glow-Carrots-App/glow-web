import { useAuth } from "../../context/AuthContext";
import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsInputs from "../../components/SettingsInputs";
import SettingsButtons from "../../components/SettingsButtons";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const SettingsPage = () => {
  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <div className={styles.container}>
      <Heading1>Settings</Heading1>
      <SettingsTopInfo uid={uid} />
      <SettingsInputs uid={uid} />
      <SettingsButtons />
      <BottomTabs />
    </div>
  );
};

export default SettingsPage;
