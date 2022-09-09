import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import SmallLinkedButton from "../SmallLinkedButton";
import UserModel from "../../model/user";

import styles from "./styles.module.css";

const ChangeAvatarList = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("/avatars/salad.png");
  const [error, setError] = useState("");

  const router = useRouter();
  const {
    authedUser: { uid },
  } = useAuth();

  const avatars1 = [
    "/avatars/pot.png",
    "/avatars/tropical-fruit.png",
    "/avatars/black-pudding.png",
    "/avatars/tupper.png",
    "/avatars/water-bottle.png",
    "/avatars/smoothie.png",
  ];
  const avatars2 = [
    "/avatars/noodle.png",
    "/avatars/camp.png",
    "/avatars/baby-food.png",
    "/avatars/leftover.png",
    "/avatars/salad.png",
    "/avatars/birthday-cake.png",
  ];

  const handleAvatarUpdate = async () => {
    try {
      await UserModel.updateAvatar(uid, selectedAvatar);
      router.push("/settings");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div role="container" className={styles.container}>
      <div className={styles.avatarList}>
        <div role="avatarItemList1">
          {avatars1.map((avatar, index) => (
            <div
              role={`avatarItem${index}`}
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
        <div role="avatarItemList2">
          {avatars2.map((avatar, index) => (
            <div
              role={`avatarItem${index + 6}`}
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
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <button role="saveButton" onClick={handleAvatarUpdate}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ChangeAvatarList;
