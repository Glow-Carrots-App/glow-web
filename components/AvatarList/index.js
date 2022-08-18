import Image from "next/image";

import AvatarListItem from "../AvatarListItem";
import SmallLinkedButton from "../SmallLinkedButton";
import babyFood from "../../public/avatars/baby-food.png";
import cookingPot from "../../public/avatars/cooking-pot.png";
import foodContainer from "../../public/avatars/food-container.png";
import food from "../../public/avatars/food.png";
import camp from "../../public/avatars/camp.png";
import salad from "../../public/avatars/salad.png";

import styles from "./styles.module.css";

const AvatarList = () => {
  const avatars1 = [babyFood, cookingPot, foodContainer];
  const avatars2 = [food, camp, salad];
  return (
    <div className={styles.container}>
      <div className={styles.avatarsContainer}>
        <div className={styles.avatarColumn}>
          {avatars1.map((avatar, index) => (
            <AvatarListItem key={avatar + index}>
              <Image src={avatar} width="75px" height="75px" />
            </AvatarListItem>
          ))}
        </div>
        <div className={styles.avatarColumn}>
          {avatars2.map((avatar, index) => (
            <AvatarListItem key={avatar + index}>
              <Image src={avatar} width="75px" height="75px" />
            </AvatarListItem>
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
