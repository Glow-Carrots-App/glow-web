import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1";
import ChangePasswordForm from "../../../components/ChangePasswordForm";
import BottomTabs from "../../../components/BottomTabs/index";

import { useAuth } from "../../../context/AuthContext";

import styles from "./styles.module.css";

const PasswordPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings/password") : router.push("/sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Change Password</Heading1>
      <ChangePasswordForm />
      <img src="/pageBackgrounds/passion-fruit.png" className={styles.fruit} />
      <BottomTabs />
    </div>
  );
};

export default PasswordPage;
