import AvatarListItem from "../AvatarListItem";

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
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default AvatarList;
