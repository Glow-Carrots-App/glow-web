import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/profile") : router.push("sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Profile</Heading1>
      <UserInfo />
      <Statistics />
      <ColorBreakdown />
      <BottomTabs isProfile={true} />
    </div>
  );
};

export default ProfilePage;
