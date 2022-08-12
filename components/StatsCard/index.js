import styles from "./styles.module.css";

const StatsCard = ({ title }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
};

export default StatsCard;
