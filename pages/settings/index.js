import { useEffect, useState } from "react";

import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsNameForm from "../../components/SettingsNameForm";
import SettingsEmailForm from "../../components/SettingsEmailForm";
import SettingsButtons from "../../components/SettingsButtons";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";
import Loading from "../../components/Loading";
import UserModel from "../../model/user";
import withProtected from "../../routers/withProtected";

import styles from "./styles.module.css";

const SettingsPage = ({ authedUser }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      if (!authedUser) {
        return;
      }
      const { uid } = authedUser;
      const userResponse = await UserModel.getUser(uid);
      setUser(userResponse);
    }
    fetchData();
  }, []);

  if (!user) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
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
