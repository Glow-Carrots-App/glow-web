import Heading1 from "../../../components/Heading1/index";
import ChangeGoalForm from "../../../components/ChangeGoalForm";

import styles from "./styles.module.css";

const ChangeGoal = () => {
  return (
    <div className={styles.container}>
      <Heading1>Change Goal</Heading1>
      <p>How many healthy foods do you want to eat each day?</p>
      <ChangeGoalForm />
    </div>
  );
};

export default ChangeGoal;
