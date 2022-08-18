import styles from "./styles.module.css";

const ColorBreakdown = () => {
  let colorArr = [
    "#f94d4d",
    "#f94d4d",
    "#f94d4d",
    "#f94d4d",
    "#fd8f52",
    "#fd8f52",
    "#f9c449",
    "#f9c449",
    "#f9c449",
    "#6aab9c",
    "#6aab9c",
    "#6aab9c",
    "#6aab9c",
    "#6aab9c",
    "#4b37a8",
    "#4b37a8",
    "#4b37a8",
    "#4b37a8",
    "#4b37a8",
    "#4b37a8",
    "#f2edcf",
  ];
  return (
    <div className={styles.container}>
      <p>Total Color Breakdown</p>
      <div className={styles.progressBar}>
        {colorArr.map((color, index, arr) => (
          <div
            className={styles.progressItem}
            style={{ backgroundColor: color, width: 500 / arr.length }}
            key={index + color}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBreakdown;
