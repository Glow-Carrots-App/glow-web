import StatsCard from "../StatsCard";

import styles from "./styles.module.css";

const Statistics = () => {
  return (
    <div className={styles.container}>
      <text className={styles.statsHeading}>Statistics</text>
      <div className={styles.statsRow}>
        <StatsCard title="DayStreak" />
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
