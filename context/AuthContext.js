import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updatePassword,
  updateEmail,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/router";

import { auth, app, googleProvider } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// const router = useRouter();

export const AuthContextProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthedUser({
          uid: user.uid,
          email: user.email,
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
    signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithRedirect(auth, googleProvider);
  };

  const logout = async () => {
    setAuthedUser(null);
    await signOut(auth);
  };

  const deleteAccount = async () => {
    setAuthedUser(null);
    await deleteUser(auth.currentUser);
  };

  const changePassword = async (newPassword) => {
    await updatePassword(auth.currentUser, newPassword);
  };

  const changeEmail = async (newEmail) => {
    await updateEmail(auth.currentUser, newEmail);
  };

  return (
    <AuthContext.Provider
      value={{
        authedUser,
        loading,
        login,
        signup,
        logout,
        deleteAccount,
        changePassword,
        changeEmail,
        googleLogin,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
