import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import SettingsTopInfo from "../../components/SettingsTopInfo";
import SettingsInputs from "../../components/SettingsInputs";
import SettingsButtons from "../../components/SettingsButtons";
import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const SettingsPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings") : router.push("sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/profile">
        <a className={styles.doneLink}>Done</a>
      </Link>
      <Heading1>Settings</Heading1>
      <SettingsTopInfo />
      <SettingsInputs />
      <SettingsButtons />
      <BottomTabs />
    </div>
  );
};

export default SettingsPage;
