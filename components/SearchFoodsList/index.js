import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";
const SearchFoodsList = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search food" />
      <div className={styles.backgroundImage}>Background Image</div>
      <div className={styles.buttons}>
        <SmallLinkedButton href="/today">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/today">Save</SmallLinkedButton>
      </div>
    </div>
  );
};
export default SearchFoodsList;
