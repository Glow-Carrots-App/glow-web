import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const ChangeAvatar = () => {
  return (
    <div className={styles.container}>
      <Heading1>Change Avatar</Heading1>
      <AvatarList />
      <BottomTabs />
    </div>
  );
};

export default ChangeAvatar;
