import styles from "./styles.module.css";

const StatsCard = ({ title }) => {
  return (
    <div className={styles.container}>
      <text className={styles.title}>{title}</text>
    </div>
  );
};

export default StatsCard;
