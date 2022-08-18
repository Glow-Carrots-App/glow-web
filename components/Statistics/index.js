import StatsCard from "../StatsCard";
import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const Statistics = () => {
  return (
    <div className={styles.container}>
      <p>Statistics</p>
      <div className={styles.statsRow}>
        <StatsCard>{"Day Streak"}</StatsCard>
        <StatsCard>{"Carrots"}</StatsCard>
      </div>
      <div className={styles.statsRow}>
        <StatsCard>{"Highest Color"}</StatsCard>
        <StatsCard>{"Lowest Color"}</StatsCard>
      </div>
    </div>
  );
};

export default Statistics;
