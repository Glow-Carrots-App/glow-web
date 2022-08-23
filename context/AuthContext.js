import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updatePassword,
  updateEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
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
    setUser(null);
    await signOut(auth);
  };

  const deleteAccount = async () => {
    setUser(null);
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
        user,
        login,
        signup,
        logout,
        deleteAccount,
        changePassword,
        changeEmail,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
