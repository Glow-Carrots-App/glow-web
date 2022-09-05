import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsNameForm from "../../components/SettingsNameForm";
import SettingsEmailForm from "../../components/SettingsEmailForm";
import SettingsButtons from "../../components/SettingsButtons";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";
import withProtected from "../../routers/withProtected";
import Sidebar from "../../components/Sidebar";

import styles from "./styles.module.css";

const SettingsPage = ({ user }) => {
  return (
    <div className={styles.container}>
      <Sidebar page="settings" />
      <Heading1>Settings</Heading1>
      <SettingsTopInfo user={user} />
      <SettingsNameForm user={user} />
      <SettingsEmailForm user={user} />
      <SettingsButtons />
      <BottomTabs />
    </div>
  );
};

export default withProtected(SettingsPage);
