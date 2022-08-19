import countColors from "../../utils/countColors";

import styles from "./styles.module.css";

const VerticalColorBreakdown = ({ arr, width, height }) => {
  let colorCount = countColors(arr);

  if (!colorCount) {
    return <div className={styles.progressBar}>_</div>;
  }

  colorCount.forEach(
    (count) =>
      (count.percentage = (100 * count.count) / colorCount[6].count + "%")
  );

  return (
    <div
      className={styles.progressBar}
      style={{ width: width, height: height }}
    >
      {colorCount.map((color, index) => {
        if (index === 6 || color.count === 0) {
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
