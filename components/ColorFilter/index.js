import styles from "./styles.module.css";

const ColorFilter = () => {
  const colors = [
    "#f94d4d",
    "#fd8f52",
    "#f9c449",
    "#6aab9c",
    "#4b37a8",
    "#f2edcf",
  ];
  return (
    <>
      <p className={styles.subheading}>Filter by Color: </p>
      <div className={styles.container}>
        {colors.map((color, index) => (
          <div
            className={styles.color}
            style={{ backgroundColor: color }}
            key={index + styles.color}
          />
        ))}
      </div>
    </>
  );
};

export default ColorFilter;
