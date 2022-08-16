import { useEffect } from "react";
import { useRouter } from "next/router";

import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import { useAuth } from "../../../context/AuthContext";

import styles from "./styles.module.css";

const FeedbackPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/settings/feedback") : router.push("/sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>Feedback</Heading1>
      <p>Send us your feedback!</p>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackPage;
