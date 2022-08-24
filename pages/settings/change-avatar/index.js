import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const ChangeAvatar = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Change Your Avatar</Heading1>
        <AvatarList />
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default ChangeAvatar;
