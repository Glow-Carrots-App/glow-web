import styles from "./styles.module.css";

const HomeStatsContainer = () => {
  return (
    <>
      <div className={styles.statsContainer} role="statsContainer">
        <img className={styles.stats1} src="/landing/glow-stats1-home.png" />
        <p className={styles.statsText}>Keep track of statistics and more!</p>
        <img className={styles.stats2} src="/landing/glow-stats2-home.png" />
      </div>
    </>
  );
};

export default HomeStatsContainer;
