import { useState, useEffect } from "react";

import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";
import StatsCard from "../StatsCard";
import checkHighestColor from "../../utils/checkHighestColor";
import checkLowestColor from "../../utils/checkLowestColor";
import pickLowIcon from "../../utils/pickLowIcon";
import pickHighIcon from "../../utils/pickHighIcon";
import SAMPLE_FOOD_DATA from "../../sampleData/userSampleFoodData";
import Loading from "../Loading";

import styles from "./styles.module.css";

const Statistics = () => {
  const [userObj, setUserObj] = useState();
  const [loading, setLoading] = useState(true);
  const {
    authedUser: { uid },
  } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const userResponse = await UserModel.getUser(uid);
      setUserObj(userResponse);
      setLoading(false);
    }
    fetchData();
  }, []);

  const lowestColor = checkLowestColor(SAMPLE_FOOD_DATA);
  const highestColor = checkHighestColor(SAMPLE_FOOD_DATA);

  const lowIcon = pickLowIcon(lowestColor);
  const highIcon = pickHighIcon(highestColor);

  const capatalizeString = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const lowestColorData = capatalizeString(lowestColor.color);
  const highestColorData = capatalizeString(highestColor.color);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <p>Statistics</p>
      <div className={styles.statsRow}>
        <StatsCard
          src="/stats/dayStreak.png"
          title="Day Streak"
          data={userObj.dayStreak}
        />
        <StatsCard
          src="/stats/goldenCarrot.png"
          title="Golden Carrots"
          data={userObj.goldenCarrots}
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
