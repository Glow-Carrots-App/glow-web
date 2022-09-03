import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase.js";
import { onSnapshot, doc } from "firebase/firestore";

import { useAuth } from "./AuthContext";
import Loading from "../components/Loading";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { authedUser } = useAuth();

  useEffect(() => {
    if (authedUser) {
      console.log("user context if authedUser");
      const { uid } = authedUser;
      const docRef = doc(db, "users", uid);
      const unsubscribe = onSnapshot(docRef, (doc) => {
        setUser(doc.data());
      });
      setLoading(false);
      return () => {
        console.log("unsubscribing");
        unsubscribe();
      };
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  if (loading || !user) {
    console.log("user context loading");
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
