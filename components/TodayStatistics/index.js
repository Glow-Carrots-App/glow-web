import StatsCard from "../StatsCard";
import checkHighestColor from "../../utils/checkHighestColor";
import checkLowestColor from "../../utils/checkLowestColor";
import pickLowIcon from "../../utils/pickLowIcon";
import pickHighIcon from "../../utils/pickHighIcon";

import styles from "./styles.module.css";

const Statistics = ({ user, lifetimeFoodHistory }) => {
  const lowestColor = checkLowestColor(lifetimeFoodHistory);
  const highestColor = checkHighestColor(lifetimeFoodHistory);

  const lowIcon = pickLowIcon(lowestColor);
  const highIcon = pickHighIcon(highestColor);

  return (
    <div className={styles.container}>
      <StatsCard
        src="/stats/dayStreak.png"
        title="Day Streak"
        data={user.dayStreak}
      />
      <StatsCard
        src="/stats/goldenCarrot.png"
        title="Golden Carrots"
        data={user.goldenCarrots}
      />
      <StatsCard
        src={highIcon}
        title="Highest Color"
        data={highestColor.color}
        color={highestColor.textHex}
      />
      <StatsCard
        src={lowIcon}
        title="Lowest Color"
        data={lowestColor.color}
        color={lowestColor.textHex}
      />
    </div>
  );
};

export default Statistics;
