import StatsCard from "../StatsCard";
import checkHighestColor from "../../utils/checkHighestColor";
import checkLowestColor from "../../utils/checkLowestColor";
import pickLowIcon from "../../utils/pickLowIcon";
import pickHighIcon from "../../utils/pickHighIcon";

import styles from "./styles.module.css";

const DUMMY_LIFETIME = [
  { product: "apple", color: "red", textHex: "#f94d4d" },
  { product: "strawberry", color: "red", textHex: "#f94d4d" },
  { product: "strawberry", color: "red", textHex: "#f94d4d" },
  { product: "strawberry", color: "red", textHex: "#f94d4d" },
  { product: "orange", color: "orange", textHex: "#fd8f52" },
  { product: "lettuce", color: "green", textHex: "#479d45" },
  { product: "lettuce", color: "green", textHex: "#479d45" },
  { product: "lettuce", color: "green", textHex: "#479d45" },
  // { product: "onion", color: "white", textHex: "#97906e" },
  { product: "banana", color: "yellow", textHex: "#ffbb1c" },
];

const Statistics = () => {
  const lowestColor = checkLowestColor(DUMMY_LIFETIME);
  const highestColor = checkHighestColor(DUMMY_LIFETIME);

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
