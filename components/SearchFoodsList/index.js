import alphabetizeFoods from "../../utils/alphabetizeFoods";

import styles from "./styles.module.css";

const SearchFoodsList = ({
  setSelectedColor,
  setSelectedFood,
  setFocused,
  data,
  setSearchInput,
}) => {
  return (
    <div className={styles.listContainer}>
      {data.map((food) => {
        return (
          <div
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

export default SearchFoodsList;
