import { useState } from "react";

import SearchFoodsList from "../SearchFoodsList";
import ColorFilter from "../ColorFilter";
import masterFoodLibrary from "../../masterFoodLibrary/masterFoodLibrary";
import alphabetizeFoods from "../../utils/alphabetizeFoods";
import filterFoodsForSearch from "../../utils/filterFoodsForSearch";
import SearchFoodsButtons from "../SearchFoodsButtons";

import styles from "./styles.module.css";

const SearchFoodsForm = ({ user, currentDay }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [focused, setFocused] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const alphabetizedFoods = alphabetizeFoods(masterFoodLibrary);

  const filteredFood = filterFoodsForSearch(
    alphabetizedFoods,
    selectedColor,
    searchInput
  );

  return (
    <div className={styles.container}>
      <ColorFilter
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
          <SearchFoodsList
            setSelectedColor={setSelectedColor}
            setSelectedFood={setSelectedFood}
            setFocused={setFocused}
            setSearchInput={setSearchInput}
            data={filteredFood}
          />
        )}
      </div>
      <div className={styles.backgroundImage}>
        <img src="/eatBackground/eatBackground.png" />
      </div>
      <SearchFoodsButtons
        user={user}
        currentDay={currentDay}
        setSearchInput={setSearchInput}
        setSelectedFood={setSelectedFood}
        selectedFood={selectedFood}
      />
    </div>
  );
};
export default SearchFoodsForm;
