import styles from "./styles.module.css";

const TodayInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.goalContainer}>
        <div />
        <p>4/10 Foods</p>
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
