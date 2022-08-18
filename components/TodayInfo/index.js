import styles from "./styles.module.css";

const TodayInfo = () => {
  const foodList = [
    { product: "Kale", textColor: "#479d45" },
    { product: "Onion", textColor: "#97906e" },
    { product: "Apple", textColor: "#f94d4d" },
    { product: "Blueberry", textColor: "#7471e7" },
    { product: "Orange", textColor: "#fd8f52" },
    { product: "Banana", textColor: "#ffbb1c" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.goalContainer}>
        <div />
        <p>4/10 Foods</p>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.foodList}>
          {foodList.map((food, index) => (
            <li style={{ color: food.textColor }} key={index + food.product}>
              {food.product}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodayInfo;
