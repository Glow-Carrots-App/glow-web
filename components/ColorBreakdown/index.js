import styles from "./styles.module.css";

const ColorBreakdown = () => {
  return (
    <div className={styles.container}>
      <p className={styles.breakdownHeader}>Total Color Breakdown</p>
      <div className={styles.progressBar}>Progress Bar</div>
    </div>
  );
};

export default ColorBreakdown;
