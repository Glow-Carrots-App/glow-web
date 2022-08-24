import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const ChangeGoalForm = () => {
  const [number, setNumber] = useState(0);

  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.numberPickerContainer}>
        <Heading2>I want to eat:</Heading2>
        <div
          className={styles.arrowUp}
          onClick={() => setNumber((prev) => prev + 1)}
        />
        <div className={styles.numberPicker}>{number}</div>
        <div
          className={styles.arrowDown}
          onClick={() => setNumber((prev) => prev - 1)}
        />
        <Heading2>healthy foods daily.</Heading2>
      </div>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/settings">Submit</SmallLinkedButton>
      </div>
    </div>
  );
};

export default ChangeGoalForm;
