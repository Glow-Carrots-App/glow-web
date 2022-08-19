import styles from "./styles.module.css";

const SearchFoodsList = ({ data }) => {
  return (
    <div className={styles.listContainer}>
      {data.map((food, i) => {
        return (
          <button className={styles.foodBtn} key={food.textHex + i}>
            {food.product}
          </button>
        );
      })}
    </div>
  );
};

export default SearchFoodsList;
