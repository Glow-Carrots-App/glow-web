import styles from "./styles.module.css";

const WeeklyConsumption = () => {
  return (
    <div className={styles.container}>
      <p>Last 7 Days</p>
      <div className={styles.barChart}>BarChart</div>
    </div>
  );
};

export default WeeklyConsumption;
