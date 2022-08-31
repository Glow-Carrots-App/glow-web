import { useState } from "react";
import dayjs from "dayjs";

import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const EatFormButtons = ({
  user,
  currentDay,
  selectedFood,
  setSearchInput,
  setSelectedFood,
  displayCheck,
}) => {
  const [currentCount, setCurrentCount] = useState(currentDay.length);
  const [isGoalComplete, setIsGoalComplete] = useState(
    user.dailyGoal.isComplete
  );

  let {
    dailyGoal: { amount },
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
        const currentDate = dayjs().format("MM/DD/YYYY");
        UserModel.incrementDayStreak(uid);
        UserModel.incrementGoldenCarrots(uid);
        UserModel.updateLastGoalDate(uid, currentDate);
        UserModel.updateGoalIsComplete(uid, true);
        setIsGoalComplete(true);
      }
      displayCheck();
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
export default EatFormButtons;
