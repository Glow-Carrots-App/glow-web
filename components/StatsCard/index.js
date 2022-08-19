import styles from "./styles.module.css";

const StatsCard = ({ src, title, data }) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.topRow}>
        <img className={styles.icon} src={src} style={{ height: "28px" }} />
        <span>{title}</span>
      </div>
      <p>{data}</p>
    </div>
  );
};

export default StatsCard;
