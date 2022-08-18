import Image from "next/image";

import SmallLinkedButton from "../SmallLinkedButton";
import eatImg from "../../public/eatBackground/eatBackground.png";

import styles from "./styles.module.css";

const SearchFoodsList = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search food" />
      <div className={styles.backgroundImage}>
        <Image src={eatImg} width="185px" height="185px" />
      </div>
      <div className={styles.buttons}>
        <SmallLinkedButton href="/today">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/today">Save</SmallLinkedButton>
      </div>
    </div>
  );
};
export default SearchFoodsList;
