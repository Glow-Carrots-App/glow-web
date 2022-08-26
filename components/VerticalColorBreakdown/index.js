import styles from "./styles.module.css";

const VerticalColorBreakdown = ({ day, numberOfDays, height }) => {
  if (!day.percentage) {
    return <div className={styles.progressBar}>_</div>;
  }

  let className;
  if (numberOfDays === 7) {
    className = styles.progressBar7;
  } else if (numberOfDays === 14) {
    className = styles.progressBar14;
  } else {
    className = styles.progressBar30;
  }

  return (
    <div className={className} style={{ height: height }}>
      {Object.keys(day).map((key, index) => {
        let height = day[key];
        let color = key;
        if (height === "0%" || color === "percentage") {
          return null;
        }
        return (
          <div
            key={color + index}
            className={styles.progressItem}
            style={{
              backgroundColor: color,
              height: height,
            }}
          />
        );
      })}
    </div>
  );
};

export default VerticalColorBreakdown;
