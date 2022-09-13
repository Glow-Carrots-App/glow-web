import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import UserModel from "../../model/user";
import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const ChangeGoalForm = ({ user }) => {
  const [number, setNumber] = useState(user.dailyGoalAmount);
  const [error, setError] = useState("");
  const router = useRouter();

  const { uid } = user;

  const handleChange = (e) => {
    if (e.target.value > 60) {
      setNumber(60);
    } else if (e.target.value < 1) {
      setNumber("");
    } else {
      setNumber(Number(e.target.value));
    }
  };

  const handleDailyGoalUpdate = async () => {
    try {
      await UserModel.updateDailyGoal(uid, number);
      router.push("/settings");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/settings">
        <a className={styles.doneLink}>
          <img src="/buttonIcons/back.png" />
        </a>
      </Link>
      <div className={styles.numberPickerContainer}>
        <Heading2>I want to eat:</Heading2>
        <div
          className={number === 60 ? styles.arrowUpDisabled : styles.arrowUp}
          onClick={() => setNumber(Number(number + 1))}
          role="arrowUp"
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
          role="arrowDown"
        />
        <Heading2>healthy foods daily.</Heading2>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <button
        disabled={!number}
        className={styles.button}
        onClick={handleDailyGoalUpdate}
      >
        Save
      </button>
    </div>
  );
};

export default ChangeGoalForm;
