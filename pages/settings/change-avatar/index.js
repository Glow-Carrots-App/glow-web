import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
import BottomTabs from "../../../components/BottomTabs/index";
import { useAuth } from "../../../context/AuthContext";

import styles from "./styles.module.css";

const ChangeAvatar = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings/change-avatar") : router.push("/sign-in");
  }, []);

  return (
    <div className={styles.container}>
      <Heading1>Change Your Avatar</Heading1>
      <AvatarList />
      <BottomTabs />
    </div>
  );
};

export default ChangeAvatar;
