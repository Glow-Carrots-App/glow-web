import StatsCard from "../StatsCard";
import checkHighestColor from "../../utils/checkHighestColor";
import checkLowestColor from "../../utils/checkLowestColor";
import pickLowIcon from "../../utils/pickLowIcon";
import pickHighIcon from "../../utils/pickHighIcon";
import SAMPLE_FOOD_DATA from "../../sampleData/sampleFoodData";

import styles from "./styles.module.css";

const Statistics = () => {
  const lowestColor = checkLowestColor(SAMPLE_FOOD_DATA);
  const highestColor = checkHighestColor(SAMPLE_FOOD_DATA);

  const userDayStreak = 20;
  const userGoldenCarrots = 40;

  const lowIcon = pickLowIcon(lowestColor);
  const highIcon = pickHighIcon(highestColor);

  const capatalizeString = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const lowestColorData = capatalizeString(lowestColor.color);
  const highestColorData = capatalizeString(highestColor.color);

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
          data={highestColorData}
          color={highestColor.textHex}
        />
        <StatsCard
          src={lowIcon}
          title="Lowest Color"
          data={lowestColorData}
          color={lowestColor.textHex}
        />
      </div>
    </div>
  );
};

export default Statistics;
