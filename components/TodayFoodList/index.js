import styles from "./styles.module.css";

const TodayFoodList = ({ currentDay }) => {
  const currentCount = currentDay.length;
  return (
    <div role="container" className={styles.listContainer}>
      <div role="subcontainer">
        <img role="sunImage" className={styles.sunImg} src="/stats/sun.png" />
        <span>Today's Noms</span>
      </div>
      <ul className={styles.foodList}>
        {currentDay.map((food, index) => (
          <li style={{ color: food.textHex }} key={index + food.product}>
            {food.product}
          </li>
        ))}
      </ul>
      {!currentCount && (
        <img
          role="confused"
          className={styles.listImg}
          src="/pageBackgrounds/confused.png"
        />
      )}
    </div>
  );
};

export default TodayFoodList;
