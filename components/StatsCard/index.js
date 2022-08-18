import styles from "./styles.module.css";

const StatsCard = ({ children }) => {
  return (
    <div className={styles.statContainer}>
      <p>{children}</p>
    </div>
  );
};

export default StatsCard;
