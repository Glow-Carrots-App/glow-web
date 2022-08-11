import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";

import styles from "./styles.module.css";

const ChangeAvatar = () => {
  return (
    <div className={styles.container}>
      <Heading1>Change Avatar</Heading1>
      <AvatarList />
    </div>
  );
};

export default ChangeAvatar;
