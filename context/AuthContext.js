import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(authedUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authedUser) => {
      if (authedUser) {
        setAuthedUser({
          uid: authedUser.uid,
          email: authedUser.email,
        });
      } else {
        setAuthedUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setAuthedUser(null);
    await signOut(auth);
  };

  const deleteAccount = async () => {
    setAuthedUser(null);
    await deleteUser(auth.currentUser);
  };

  return (
    <AuthContext.Provider
      value={{ authedUser, loading, login, signup, logout, deleteAccount }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
