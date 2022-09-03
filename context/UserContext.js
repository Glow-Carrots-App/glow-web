import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthContext";
import Loading from "../components/Loading";
import UserModel from "../model/user/index.js";

import { db } from "../firebase";

import { doc, onSnapshot } from "firebase/firestore";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { authedUser } = useAuth();

  useEffect(() => {
    if (authedUser) {
      const { uid } = authedUser;
      const docRef = doc(db, "users", uid);
      const unsubscribe = onSnapshot(docRef, (doc) => {
        console.log("listening");
        setUser(doc.data());
      });
      setLoading(false);

      return () => unsubscribe();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
