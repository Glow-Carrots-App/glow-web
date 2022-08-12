import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const Eat = () => {
  return (
    <div className={styles.container}>
      <Heading1>What are you eating</Heading1>
      <ColorFilter />
      <SearchFoodsList />
      <BottomTabs />
    </div>
  );
};

export default Eat;
