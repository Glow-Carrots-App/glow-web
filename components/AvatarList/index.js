import AvatarContainer from "../AvatarContainer";

import styles from "./styles.module.css";

const AvatarList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarsContainer}>
        <div className={styles.avatarColumn}>
          <AvatarContainer>A</AvatarContainer>
          <AvatarContainer>B</AvatarContainer>
          <AvatarContainer>C</AvatarContainer>
        </div>
        <div className={styles.avatarColumn}>
          <AvatarContainer>D</AvatarContainer>
          <AvatarContainer>E</AvatarContainer>
          <AvatarContainer>F</AvatarContainer>
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
