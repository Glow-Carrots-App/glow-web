import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import Loading from "../Loading";

const WithProtected = ({ children }) => {
  const { authedUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authedUser) {
      router.push("/sign-in");
    }
  }, [authedUser, loading]);

  if (loading || !authedUser) {
    return <Loading />;
  }
  return { children };
};

export default WithProtected;
