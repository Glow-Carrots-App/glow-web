import AvatarListItem from "../AvatarListItem";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const AvatarList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarsContainer}>
        <div className={styles.avatarColumn}>
          <AvatarListItem>A</AvatarListItem>
          <AvatarListItem>B</AvatarListItem>
          <AvatarListItem>C</AvatarListItem>
        </div>
        <div className={styles.avatarColumn}>
          <AvatarListItem>D</AvatarListItem>
          <AvatarListItem>E</AvatarListItem>
          <AvatarListItem>F</AvatarListItem>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/settings">Save</SmallLinkedButton>
      </div>
    </div>
  );
};

export default AvatarList;
