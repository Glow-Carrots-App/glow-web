import styles from "./styles.module.css";

const EatFoodsList = ({
  setSelectedColor,
  setSelectedFood,
  setFocused,
  data,
  setSearchInput,
}) => {
  return (
    <div role="container" className={styles.listContainer}>
      {data.map((food) => {
        return (
          <div
            role="food-list-item"
            onMouseDown={() => {
              setSearchInput(food.productSearch);
              setSelectedFood(food);
              setSelectedColor(null);
              setFocused(false);
            }}
            className={styles.foodBtn}
            key={food.productSearch}
          >
            <div
              style={{ backgroundColor: food.textHex }}
              className={styles.colorDot}
            />
            {food.productSearch}
          </div>
        );
      })}
    </div>
  );
};

export default EatFoodsList;
