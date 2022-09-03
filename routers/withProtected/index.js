import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import Loading from "../../components/Loading";

const withProtected = (Component) => {
  return function Protected() {
    const { authedUser } = useAuth();
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!authedUser) {
        console.log("with protected pushing route");
        router.replace("/sign-in");
      }
    }, [authedUser]);

    if (!authedUser) {
      console.log("with protected loading");
      return <Loading />;
    }
    return <Component authedUser={authedUser} user={user} />;
  };
};

export default withProtected;
