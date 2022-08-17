import StatsCard from "../StatsCard";
import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const Statistics = () => {
  return (
    <div className={styles.container}>
      <p>Statistics</p>
      <div className={styles.statsRow}>
        <StatsCard title="Day Streak" />
        <StatsCard title="Carrots" />
      </div>
      <div className={styles.statsRow}>
        <StatsCard title="Highest Color" />
        <StatsCard title="Lowest Color" />
      </div>
    </div>
  );
};

export default Statistics;
