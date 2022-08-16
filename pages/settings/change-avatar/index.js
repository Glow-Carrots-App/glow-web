import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
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
      <Heading1>Change Avatar</Heading1>
      <AvatarList />
    </div>
  );
};

export default ChangeAvatar;
