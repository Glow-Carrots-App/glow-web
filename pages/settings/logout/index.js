import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1";
import LogOut from "../../../components/LogOut";
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
      <LogOut />
    </div>
  );
};

export default LogOutPage;
