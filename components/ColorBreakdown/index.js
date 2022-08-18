import countColors from "../../utils/countColors";

import styles from "./styles.module.css";

const ColorBreakdown = () => {
  let colorArr = [
    { color: "red", fillHex: "#f94d4d" },
    { color: "red", fillHex: "#f94d4d" },
    { color: "red", fillHex: "#f94d4d" },
    { color: "red", fillHex: "#f94d4d" },
    { color: "orange", fillHex: "#fd8f52" },
    { color: "orange", fillHex: "#fd8f52" },
    { color: "yellow", fillHex: "#f9c449" },
    { color: "yellow", fillHex: "#f9c449" },
    { color: "yellow", fillHex: "#f9c449" },
    { color: "green", fillHex: "#6aab9c" },
    { color: "green", fillHex: "#6aab9c" },
    { color: "green", fillHex: "#6aab9c" },
    { color: "green", fillHex: "#6aab9c" },
    { color: "green", fillHex: "#6aab9c" },
    { color: "blue", fillHex: "#4b37a8" },
    { color: "blue", fillHex: "#4b37a8" },
    { color: "blue", fillHex: "#4b37a8" },
    { color: "blue", fillHex: "#4b37a8" },
    { color: "blue", fillHex: "#4b37a8" },
    { color: "blue", fillHex: "#4b37a8" },
    { color: "tan", fillHex: "#f2edcf" },
  ];

  let colorCount = countColors(colorArr);
  let percentages = colorCount.map(
    (color) => (100 * color.count) / colorCount[6].count + "%"
  );
  colorCount.forEach((count, index) => (count.percentage = percentages[index]));

  return (
    <div className={styles.container}>
      <p>Total Color Breakdown</p>
      <div className={styles.progressBar}>
        {colorCount.map((color, index) => (
          <div
            key={color + index}
            className={styles.progressItem}
            style={{ backgroundColor: color.fillHex, width: color.percentage }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBreakdown;
