import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import Loading from "../../components/Loading";

const withUnprotected = (Component) => {
  return function Unprotected() {
    const { authedUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (authedUser) {
        console.log("with unprotected pushing route");
        router.push("/today");
      }
    }, [authedUser]);

    if (authedUser) {
      console.log("ewith unprotected losading");
      return <Loading />;
    }
    return <Component authedUser={authedUser} />;
  };
};

export default withUnprotected;
