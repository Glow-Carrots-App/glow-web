import StatsCard from "../StatsCard";
import checkHighestColor from "../../utils/checkHighestColor";
import checkLowestColor from "../../utils/checkLowestColor";
import pickLowIcon from "../../utils/pickLowIcon";
import pickHighIcon from "../../utils/pickHighIcon";

import styles from "./styles.module.css";

const ProfileStatistics = ({ user, lifetimeFoodHistory }) => {
  const lowestColor = checkLowestColor(lifetimeFoodHistory);
  const highestColor = checkHighestColor(lifetimeFoodHistory);

  const lowIcon = pickLowIcon(lowestColor);
  const highIcon = pickHighIcon(highestColor);

  return (
    <div className={styles.container}>
      <p>Statistics</p>
      <div className={styles.statsRow} role="statsRow1">
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
      </div>
      <div className={styles.statsRow} role="statsRow2">
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
    </div>
  );
};

export default ProfileStatistics;
