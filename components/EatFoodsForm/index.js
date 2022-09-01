import { useState } from "react";

import EatColorFilter from "../EatColorFilter";
import EatFoodsList from "../EatFoodsList";
import EatFormButtons from "../EatFormButtons";
import masterFoodLibrary from "../../masterFoodLibrary/masterFoodLibrary";
import alphabetizeFoods from "../../utils/alphabetizeFoods";
import filterFoodsForSearch from "../../utils/filterFoodsForSearch";

import styles from "./styles.module.css";

const EatFoodsForm = ({ user, currentDay, setCurrentDay }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [focused, setFocused] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const alphabetizedFoods = alphabetizeFoods(masterFoodLibrary);

  const filteredFood = filterFoodsForSearch(
    alphabetizedFoods,
    selectedColor,
    searchInput
  );

  const displayCheckmark = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <EatColorFilter
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <input
        type="text"
        placeholder="Search food"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div className={styles.blockContainer}>
        {(focused || selectedColor) && (
          <EatFoodsList
            setSelectedColor={setSelectedColor}
            setSelectedFood={setSelectedFood}
            setFocused={setFocused}
            setSearchInput={setSearchInput}
            data={filteredFood}
          />
        )}
      </div>
      <div className={styles.backgroundImage}>
        <img
          className={styles.bowlImg}
          src="/eatBackground/eatBackground.png"
        />
        <img
          className={styles.checkImg}
          src="/eatBackground/check.png"
          style={
            isAdded
              ? { visibility: "visible", opacity: 1 }
              : { visibility: "hidden", opacity: 0 }
          }
        />
      </div>
      <EatFormButtons
        user={user}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        setSearchInput={setSearchInput}
        setSelectedFood={setSelectedFood}
        selectedFood={selectedFood}
        displayCheckmark={displayCheckmark}
      />
    </div>
  );
};
export default EatFoodsForm;
