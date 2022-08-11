import styles from "./styles.module.css";

const StatsCard = ({ title }) => {
  return (
    <div className={styles.container}>
      <text>{title}</text>
    </div>
  );
};

export default StatsCard;
