import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const AvatarList = () => {
  const avatars1 = [
    "/avatars/baby-food.png",
    "/avatars/cooking-pot.png",
    "/avatars/food-container.png",
  ];
  const avatars2 = [
    "/avatars/food.png",
    "/avatars/camp.png",
    "/avatars/salad.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.avatarList}>
        <div className={styles.avatarColumn}>
          {avatars1.map((avatar, index) => (
            <div className={styles.avatarListItem} key={avatar + index}>
              <img src={avatar} className={styles.avatar} />
            </div>
          ))}
        </div>
        <div className={styles.avatarColumn}>
          {avatars2.map((avatar, index) => (
            <div className={styles.avatarListItem} key={avatar + index}>
              <img src={avatar} className={styles.avatar} />
            </div>
          ))}
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
