import Link from "next/link";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const ChangeGoalForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.numberPickerContainer}>
        <Heading2>I want to eat:</Heading2>
        <div className={styles.plusMinus}>+</div>
        <div className={styles.numberPicker}>8</div>
        <div className={styles.plusMinus}>-</div>
        <Heading2>healthy foods daily!</Heading2>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/settings">
          <a>
            <button>Cancel</button>
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <button>Submit</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ChangeGoalForm;
