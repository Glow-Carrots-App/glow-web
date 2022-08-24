import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading1 from "../../components/Heading1";
import SearchFoodsForm from "../../components/SearchFoodsForm";
import BottomTabs from "../../components/BottomTabs";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const Eat = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push("/eat") : router.push("sign-in");
  }, []);
  return (
    <div className={styles.container}>
      <Heading1>What are you eating?</Heading1>
      <SearchFoodsForm />
      <BottomTabs isEat={true} />
    </div>
  );
};

export default Eat;
