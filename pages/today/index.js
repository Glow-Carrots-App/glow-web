import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../components/Heading1";
import TodayInfo from "../../components/TodayInfo";
import ConsumptionHistory from "../../components/ConsumptionHistory";
import BottomTabs from "../../components/BottomTabs";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const Today = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/today") : router.push("sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Today</Heading1>
      <TodayInfo />
      <ConsumptionHistory />
      <BottomTabs isToday={true} />
    </div>
  );
};

export default Today;
