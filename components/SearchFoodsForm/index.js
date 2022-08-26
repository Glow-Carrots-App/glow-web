import { useState } from "react";
import dayjs from "dayjs";

import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";
import SmallLinkedButton from "../SmallLinkedButton";
import SearchFoodsList from "../SearchFoodsList";
import ColorFilter from "../ColorFilter";
import masterFoodLibrary from "../../masterFoodLibrary/masterFoodLibrary";
import alphabetizeFoods from "../../utils/alphabetizeFoods";

import styles from "./styles.module.css";

const SearchFoodsForm = ({ user, currentDay }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [focused, setFocused] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isNew, setIsNew] = useState(true);

  const {
    dailyGoal: { amount, isComplete },
    dayStreak,
    goldenCarrots,
    uid,
  } = user;

  const alphabetizedFoods = alphabetizeFoods(masterFoodLibrary);
  const currentCount = currentDay.length;

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

  const handleEatFood = (e) => {
    e.preventDefault();

    if (!selectedFood) {
      return;
    }

    const newFood = {
      ...selectedFood,
      date: dayjs().format("YYYY/MM/DD"),
      uid,
    };

    try {
      FoodEntryModel.createFoodEntry(newFood);
      console.log("CC", currentCount, "A", amount, "isComplete", isComplete);
      if (currentCount + 1 >= amount && !isComplete && isNew) {
        console.log("in if statement");
        UserModel.incrementDayStreak(uid, dayStreak);
        UserModel.incrementGoldenCarrots(uid, goldenCarrots);
        UserModel.updateGoalIsComplete(uid, true);
        setIsNew(false);
      }
      setSearchInput("");
      setSelectedFood(null);
    } catch (err) {
      console.log(err);
    }
  };

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
        <input
          className={styles.addButton}
          type="submit"
          name="submitMessage"
          value="Add"
          onClick={handleEatFood}
        />
      </div>
    </div>
  );
};
export default SearchFoodsForm;
