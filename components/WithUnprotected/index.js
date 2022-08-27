import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import Loading from "../Loading";

const WithUnprotected = ({ children }) => {
  const { authedUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authedUser) {
      router.push("/today");
    }
  }, [authedUser, loading]);

  if (loading || authedUser) {
    return <Loading />;
  }
  return <>{children}</>;
};

export default WithUnprotected;
