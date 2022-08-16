import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../../components/Heading1/index";
import ChangeGoalForm from "../../../components/ChangeGoalForm";
import { useAuth } from "../../../context/AuthContext";

import styles from "./styles.module.css";

const ChangeGoal = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings/change-goal") : router.push("/sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Change Goal</Heading1>
      <p>How many healthy foods do you want to eat each day?</p>
      <ChangeGoalForm />
    </div>
  );
};

export default ChangeGoal;
