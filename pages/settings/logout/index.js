import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1";
import LogOut from "../../../components/LogOut";
import BottomTabs from "../../../components/BottomTabs/index";
import { useAuth } from "../../../context/AuthContext";

import styles from "./styles.module.css";

const LogOutPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings/logout") : router.push("/sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Log Out</Heading1>
      <img
        src="/pageBackgrounds/watermelon.png"
        className={styles.watermelon1}
      />
      <img
        src="/pageBackgrounds/watermelon.png"
        className={styles.watermelon2}
      />
      <LogOut />
      <BottomTabs />
    </div>
  );
};

export default LogOutPage;
