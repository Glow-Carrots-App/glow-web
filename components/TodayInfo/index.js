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
          <li className={styles.green}>Kale</li>
          <li className={styles.tan}>Onion</li>
          <li className={styles.red}>Apple</li>
          <li className={styles.blue}>Blueberry</li>
          <li className={styles.orange}>Orange</li>
          <li className={styles.yellow}>Banana</li>
        </ul>
      </div>
    </div>
  );
};

export default TodayInfo;
