import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const ChangeGoalForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.numberPickerContainer}>
        <Heading2>I want to eat:</Heading2>
        <div className={styles.arrowUp}></div>
        <div className={styles.numberPicker}>8</div>
        <div className={styles.arrowDown}></div>
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
