import { useEffect, useState } from "react";

import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsInputs from "../../components/SettingsInputs";
import SettingsButtons from "../../components/SettingsButtons";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";
import Loading from "../../components/Loading";
import UserModel from "../../model/user";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const SettingsPage = () => {
  const { authedUser } = useAuth();

  const uid = authedUser?.uid ? authedUser.uid : null;

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!uid) {
        setLoading(false);
        return;
      }
      const userResponse = await UserModel.getUser(uid);
      setUser(userResponse);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Settings</Heading1>
        <SettingsTopInfo user={user} />
        <SettingsInputs user={user} />
        <SettingsButtons />
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default SettingsPage;
