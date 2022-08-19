import styles from "./styles.module.css";

const StatsCard = ({ src, title, data, color = "#573d8d" }) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.topRow}>
        <img className={styles.icon} src={src} />
        <span>{title}</span>
      </div>
      <p style={{ color: color }}>{data}</p>
    </div>
  );
};

export default StatsCard;
