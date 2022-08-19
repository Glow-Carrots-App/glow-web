import StatsCard from "../StatsCard";
import checkHighestColor from "../../utils/checkHighestColor";
import checkLowestColor from "../../utils/checkLowestColor";
import pickLowIcon from "../../utils/pickLowIcon";
import pickHighIcon from "../../utils/pickHighIcon";

import styles from "./styles.module.css";

const DUMMY_LIFETIME = [
  { product: "apple", color: "red" },
  { product: "strawberry", color: "red" },
  { product: "orange", color: "orange" },
  { product: "lettuce", color: "green" },
  { product: "onion", color: "white" },
  { product: "apple", color: "red" },
];

const Statistics = () => {
  const lowestColor = checkLowestColor(DUMMY_LIFETIME);
  const highestColor = checkHighestColor(DUMMY_LIFETIME);

  const userDayStreak = 20;
  const userGoldenCarrots = 40;

  const lowIcon = pickLowIcon(lowestColor);
  const highIcon = pickHighIcon(highestColor);

  return (
    <div className={styles.container}>
      <p>Statistics</p>
      <div className={styles.statsRow}>
        <StatsCard
          src="/stats/dayStreak.png"
          title="Day Streak"
          data={userDayStreak}
        />
        <StatsCard
          src="/stats/goldenCarrot.png"
          title="Golden Carrots"
          data={userGoldenCarrots}
        />
      </div>
      <div className={styles.statsRow}>
        <StatsCard
          src={highIcon}
          title="Highest Color"
          data={highestColor.color}
        />
        <StatsCard
          src={lowIcon}
          title="Lowest Color"
          data={lowestColor.color}
        />
      </div>
    </div>
  );
};

export default Statistics;
