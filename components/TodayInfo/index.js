import styles from "./styles.module.css";

const TodayInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.goalContainer}>
        <div className={styles.colorWheel} />
        <text className={styles.goalCompletion}>4/10 Foods</text>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.foodList}>
          <li>Kale</li>
          <li>Lettuce</li>
          <li>Apple</li>
          <li>Blueberry</li>
          <li>Plum</li>
          <li>Banana</li>
        </ul>
      </div>
    </div>
  );
};

export default TodayInfo;
