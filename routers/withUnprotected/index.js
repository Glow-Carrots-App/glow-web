import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import Loading from "../../components/Loading";

const withUnprotected = (Component) => {
  return function Unprotected(props) {
    const { authedUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (authedUser) {
        router.push("/today");
      }
    }, [authedUser]);

    if (authedUser) {
      return <Loading />;
    }
    return <Component authedUser={authedUser} {...props} />;
  };
};

export default withUnprotected;
