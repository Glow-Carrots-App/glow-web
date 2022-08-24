import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1/index.js";
import DeleteAccount from "../../../components/DeleteAccount";
import BottomTabs from "../../../components/BottomTabs/index";
import { useAuth } from "../../../context/AuthContext";

import styles from "./styles.module.css";

const DeleteAccountPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings/delete-account") : router.push("/sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Delete Account</Heading1>
      <DeleteAccount />
      <img src="/pageBackgrounds/avocado.png" className={styles.avocado1} />
      <img src="/pageBackgrounds/avocado.png" className={styles.avocado2} />
      <BottomTabs />
    </div>
  );
};

export default DeleteAccountPage;
