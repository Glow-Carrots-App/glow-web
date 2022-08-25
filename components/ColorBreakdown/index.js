import countColors from "../../utils/countColors";

import styles from "./styles.module.css";

const ColorBreakdown = ({ lifetimeFoodHistory }) => {
  let colorCount = countColors(lifetimeFoodHistory);

  return (
    <div className={styles.container}>
      <p>Total Color Breakdown</p>
      <div className={styles.progressBar}>
        {colorCount ? (
          colorCount.map((color, index) => {
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
