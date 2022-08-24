import Heading1 from "../../../components/Heading1/index";
import Heading2 from "../../../components/Heading2";
import ChangeGoalForm from "../../../components/ChangeGoalForm";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const ChangeGoal = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Daily Goal</Heading1>
        <img src="/pageBackgrounds/berries.png" className={styles.berry} />
        <Heading2>
          How many healthy foods <br />
          do you want to eat each day?
        </Heading2>
        <ChangeGoalForm />
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default ChangeGoal;
