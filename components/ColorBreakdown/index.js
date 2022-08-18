import countColors from "../../utils/countColors";
import sampleFoodData from "../../sampleData/sampleFoodData";

import styles from "./styles.module.css";

const ColorBreakdown = () => {
  let colorCount = countColors(sampleFoodData);
  let percentages = colorCount.map(
    (color) => (100 * color.count) / colorCount[6].count + "%"
  );
  colorCount.forEach((count, index) => (count.percentage = percentages[index]));

  return (
    <div className={styles.container}>
      <p>Total Color Breakdown</p>
      <div className={styles.progressBar}>
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
                width: color.percentage,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorBreakdown;
