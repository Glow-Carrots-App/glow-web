import { useState } from "react";
import dayjs from "dayjs";

import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const SearchFoodsButtons = ({
  user,
  currentDay,
  selectedFood,
  setSearchInput,
  setSelectedFood,
}) => {
  const [currentCount, setCurrentCount] = useState(currentDay.length);
  const [isGoalComplete, setisGoalComplete] = useState(
    user.dailyGoal.isComplete
  );

  let {
    dailyGoal: { amount },
    dayStreak,
    goldenCarrots,
    uid,
  } = user;

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
      setCurrentCount(currentCount + 1);
      setSearchInput("");
      setSelectedFood(null);
      if (currentCount + 1 >= amount && !isGoalComplete) {
        UserModel.incrementDayStreak(uid, dayStreak);
        UserModel.incrementGoldenCarrots(uid, goldenCarrots);
        UserModel.updateGoalIsComplete(uid, true);
        setisGoalComplete(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.buttons}>
      <SmallLinkedButton href="/today">Cancel</SmallLinkedButton>
      <button
        disabled={selectedFood ? false : true}
        className={styles.addButton}
        onClick={handleEatFood}
      >
        Add
      </button>
    </div>
  );
};
export default SearchFoodsButtons;
