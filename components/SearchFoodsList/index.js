import styles from "./styles.module.css";

const SearchFoodsList = ({ setSelectedFood, onBlur, data, setSearchInput }) => {
  return (
    <div className={styles.listContainer}>
      {data.map((food, i) => {
        return (
          <button
            onMouseDown={() => {
              setSearchInput(food.productSearch);
              setSelectedFood(food);
              onBlur();
            }}
            className={styles.foodBtn}
            key={food.textHex + i}
          >
            {food.productSearch}
          </button>
        );
      })}
    </div>
  );
};

export default SearchFoodsList;
