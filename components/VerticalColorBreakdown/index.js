import countColors from "../../utils/countColors";

import styles from "./styles.module.css";

const VerticalColorBreakdown = ({ arr, days, height }) => {
  let colorCount = countColors(arr);

  if (!colorCount) {
    return <div className={styles.progressBar}>_</div>;
  }

  let className;
  if (days === 7) {
    className = styles.progressBar7;
  } else if (days === 14) {
    className = styles.progressBar14;
  } else {
    className = styles.progressBar30;
  }

  return (
    <div className={className} style={{ height: height }}>
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
