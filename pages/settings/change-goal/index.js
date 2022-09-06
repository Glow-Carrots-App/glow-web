import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1/index";
import Heading2 from "../../../components/Heading2";
import ChangeGoalForm from "../../../components/ChangeGoalForm";
import BottomTabs from "../../../components/BottomTabs/index";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";

import styles from "./styles.module.css";

const ChangeGoal = ({ user }) => {
  return (
    <PageContainer>
      <Sidebar />
      <img src="/pageBackgrounds/berries.png" className={styles.berry} />
      <img src="/pageBackgrounds/red-berries.png" className={styles.redBerry} />
      <Heading1>Daily Goal</Heading1>
      <Heading2>
        How many healthy foods <br />
        do you want to eat each day?
      </Heading2>
      <ChangeGoalForm user={user} />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(ChangeGoal);
