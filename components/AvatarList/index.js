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
  return (
    <div className={styles.container}>
      <div className={styles.avatarsContainer}>
        <div className={styles.avatarColumn}>
          <AvatarListItem>
            <Image
              src={babyFood}
              alt="Picture of the author"
              width="75px"
              height="75px"
            />
          </AvatarListItem>
          <AvatarListItem>
            <Image
              src={cookingPot}
              alt="Picture of the author"
              width="75px"
              height="75px"
            />
          </AvatarListItem>
          <AvatarListItem>
            <Image
              src={foodContainer}
              alt="Picture of the author"
              width="75px"
              height="75px"
            />
          </AvatarListItem>
        </div>
        <div className={styles.avatarColumn}>
          <AvatarListItem>
            <Image
              src={food}
              alt="Picture of the author"
              width="75px"
              height="75px"
            />
          </AvatarListItem>
          <AvatarListItem>
            <Image
              src={camp}
              alt="Picture of the author"
              width="75px"
              height="75px"
            />
          </AvatarListItem>
          <AvatarListItem>
            <Image
              src={salad}
              alt="Picture of the author"
              width="75px"
              height="75px"
            />
          </AvatarListItem>
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
