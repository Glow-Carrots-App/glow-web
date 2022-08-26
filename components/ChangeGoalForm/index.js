import { useState } from "react";
import { useRouter } from "next/router";

import UserModel from "../../model/user";
import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const ChangeGoalForm = ({ user }) => {
  const [number, setNumber] = useState(user.dailyGoal.amount);
  const router = useRouter();

  const {
    uid,
    dailyGoal: { isComplete },
  } = user;

  const handleChange = (e) => {
    if (e.target.value > 60) {
      setNumber(60);
    } else if (e.target.value < 1) {
      setNumber("");
    } else {
      setNumber(Number(e.target.value));
    }
  };

  const handleDailyGoalUpdate = () => {
    UserModel.updateDailyGoal(uid, number, isComplete);
    router.push("/settings");
  };

  return (
    <div className={styles.container}>
      <div className={styles.numberPickerContainer}>
        <Heading2>I want to eat:</Heading2>
        <div
          className={number === 60 ? styles.arrowUpDisabled : styles.arrowUp}
          onClick={() => setNumber(Number(number + 1))}
        />
        <input
          type="number"
          value={number}
          className={styles.numberPicker}
          min="0"
          max="60"
          onChange={handleChange}
        />
        <div
          className={
            number === 1 || !number
              ? styles.arrowDownDisabled
              : styles.arrowDown
          }
          onClick={() => setNumber(number - 1)}
        />
        <Heading2>healthy foods daily.</Heading2>
      </div>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <button
          disabled={!number}
          className={styles.button}
          onClick={handleDailyGoalUpdate}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChangeGoalForm;
