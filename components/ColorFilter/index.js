import styles from "./styles.module.css";

const ColorFilter = () => {
  const colors = ["r", "o", "y", "g", "b", "w"];
  return (
    <>
      <p className={styles.subheading}>Filter by Color: </p>
      <div className={styles.container}>
        {colors.map((color, index) => (
          <div className={styles.color} key={index}>
            {color}
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorFilter;
