import styles from "./styles.module.css";

const ColorBreakdown = () => {
  return (
    <div className={styles.container}>
      <text className={styles.breakdownHeader}>Total Color Breakdown</text>
      <div className={styles.progressBar}>Progress Bar</div>
    </div>
  );
};

export default ColorBreakdown;
