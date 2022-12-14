import countColors from "../../utils/countColors";

import styles from "./styles.module.css";

const ProfileGraph = ({ lifetimeFoodHistory }) => {
  let colorCount = countColors(lifetimeFoodHistory);

  return (
    <div className={styles.container}>
      <p>Total Color Breakdown</p>
      <div className={styles.progressBar} role="progressBar">
        {colorCount ? (
          colorCount.map((color, index) => {
            if (index === 6 || color.count === 0) {
              return null;
            }
            return (
              <div
                key={color + index}
                className={styles.progressItem}
                role="progressItem"
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

export default ProfileGraph;
