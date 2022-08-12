import Heading1 from "../../components/Heading1";
import BottomTabs from "../../components/BottomTabs";
import ColorFilter from "../../components/ColorFilter";

import styles from "./styles.module.css";

const Eat = () => {
  return (
    <div className={styles.container}>
      <Heading1>What are you eating</Heading1>
      <ColorFilter />
      <BottomTabs />
    </div>
  );
};

export default Eat;
