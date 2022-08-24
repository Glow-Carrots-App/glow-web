import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import SmallLinkedButton from "../SmallLinkedButton";
import SearchFoodsList from "../SearchFoodsList";
import ColorFilter from "../ColorFilter";
import masterFoodLibrary from "../../masterFoodLibrary/masterFoodLibrary";
import alphabetizeFoods from "../../utils/alphabetizeFoods";

import styles from "./styles.module.css";

const SearchFoodsForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [focused, setFocused] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const {
    authedUser: { uid },
  } = useAuth();

  const alphabetizedFoods = alphabetizeFoods(masterFoodLibrary);

  const filteredFood = !selectedColor
    ? alphabetizedFoods.filter((food) =>
        food.productSearch.toLowerCase().includes(searchInput.toLowerCase())
      )
    : alphabetizedFoods.filter(
        (food) =>
          food.productSearch
            .toLowerCase()
            .includes(searchInput.toLowerCase()) && food.color === selectedColor
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
            data={filteredFood}
            setSearchInput={setSearchInput}
          />
        )}
      </div>
      <div className={styles.backgroundImage}>
        <img src="/eatBackground/eatBackground.png" />
      </div>
      <div className={styles.buttons}>
        <SmallLinkedButton href="/today">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/today">Save</SmallLinkedButton>
      </div>
    </div>
  );
};
export default SearchFoodsForm;
