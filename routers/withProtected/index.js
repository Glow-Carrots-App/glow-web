import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import Loading from "../../components/Loading";

const withProtected = (Component) => {
  return function Protected() {
    const { authedUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!authedUser) {
        router.replace("/sign-in");
      }
    }, [authedUser]);

    if (!authedUser) {
      return <Loading />;
    }
    return <Component authedUser={authedUser} />;
  };
};

export default withProtected;
