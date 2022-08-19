import countColors from "../../utils/countColors";
import sampleFoodData from "../../sampleData/sampleFoodData";

import styles from "./styles.module.css";

const ColorBreakdown = () => {
  let colorCount = countColors([]);
  let percentages = colorCount
    ? colorCount.map((color) => (100 * color.count) / colorCount[6].count + "%")
    : null;
  colorCount &&
    colorCount.forEach(
      (count, index) => (count.percentage = percentages[index])
    );

  return (
    <div className={styles.container}>
      <p>Total Color Breakdown</p>
      <div className={styles.progressBar}>
        {colorCount ? (
          colorCount.map((color, index) => {
            console.log(color);
            if (index === 6 || color.count === 0) {
              return null;
            }
            return (
              <div
                key={color + index}
                className={styles.progressItem}
                style={{
                  backgroundColor: color.fillHex,
                  width: color.percentage,
                }}
              />
            );
          })
        ) : (
          <p className={styles.emptyBar}>Eat Something!</p>
        )}
      </div>
    </div>
  );
};

export default ColorBreakdown;
