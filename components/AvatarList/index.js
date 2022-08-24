import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const AvatarList = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("/avatars/salad.png");

  const {
    authedUser: { uid },
  } = useAuth();

  const avatars1 = [
    "/avatars/salad.png",
    "/avatars/cooking-pot.png",
    "/avatars/food-container.png",
    "/avatars/pie.png",
    "/avatars/pot.png",
    "/avatars/smoothie.png",
  ];
  const avatars2 = [
    "/avatars/noodle.png",
    "/avatars/camp.png",
    "/avatars/baby-food.png",
    "/avatars/leftover.png",
    "/avatars/birthday-cake.png",
    "/avatars/tropical-fruit.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.avatarList}>
        <div>
          {avatars1.map((avatar, index) => (
            <div
              className={
                avatar === selectedAvatar
                  ? styles.avatarListItemSelected
                  : styles.avatarListItem
              }
              key={avatar + index}
              onClick={() => setSelectedAvatar(avatar)}
            >
              <img src={avatar} className={styles.avatar} />
            </div>
          ))}
        </div>
        <div className={styles.avatarColumn}>
          {avatars2.map((avatar, index) => (
            <div
              className={
                avatar === selectedAvatar
                  ? styles.avatarListItemSelected
                  : styles.avatarListItem
              }
              key={avatar + index}
              onClick={() => setSelectedAvatar(avatar)}
            >
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
