import Heading1 from "../../components/Heading1";
import ColorFilter from "../../components/ColorFilter";
import SearchFoodsForm from "../../components/SearchFoodsForm";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const Eat = () => {
  return (
    <div className={styles.container}>
      <Heading1>What are you eating?</Heading1>
      <ColorFilter />
      <SearchFoodsForm />
      <BottomTabs />
    </div>
  );
};

export default Eat;
