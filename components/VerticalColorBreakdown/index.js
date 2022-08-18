import countColors from "../../utils/countColors";

import styles from "./styles.module.css";

const VerticalColorBreakdown = ({ arr, width, height }) => {
  let colorCount = countColors(arr);

  if (!colorCount) {
    return <div className={styles.progressBar}>_</div>;
  }

  let percentages = colorCount.map(
    (color) => (100 * color.count) / colorCount[6].count + "%"
  );
  colorCount.forEach((count, index) => (count.percentage = percentages[index]));

  return (
    <div
      className={styles.progressBar}
      style={{ width: width, maxHeight: height }}
    >
      {colorCount.map((color, index) => {
        if (index === 6) {
          return null;
        }
        return (
          <div
            key={color + index}
            className={styles.progressItem}
            style={{
              backgroundColor: color.fillHex,
              height: color.percentage,
            }}
          />
        );
      })}
    </div>
  );
};

export default VerticalColorBreakdown;
