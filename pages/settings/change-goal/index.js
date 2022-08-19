import Heading1 from "../../../components/Heading1/index";
import ChangeGoalForm from "../../../components/ChangeGoalForm";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const ChangeGoal = () => {
  return (
    <div className={styles.container}>
      <Heading1>Daily Goal</Heading1>
      <p>
        How many healthy foods <br />
        do you want to eat each day?
      </p>
      <ChangeGoalForm />
      <BottomTabs />
    </div>
  );
};

export default ChangeGoal;
