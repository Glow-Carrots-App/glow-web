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
  getRedirectResult,
  getAdditionalUserInfo,
} from "firebase/auth";

import UserModel from "../model/user";
import { auth, googleProvider } from "../firebase";
import createNewUserDataModel from "../utils/createNewUserDataModel";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const debugRedirectResult = async () => {
        try {
          const result = await getRedirectResult(auth);
          if (result) {
            const {
              user: { email, uid },
            } = result;
            const {
              isNewUser,
              profile: { given_name },
            } = getAdditionalUserInfo(result);
            const newUser = createNewUserDataModel(email, given_name, uid);
            isNewUser ? await UserModel.createUser(newUser) : null;
          }
        } catch (error) {
          console.log(error);
        }
      };

      if (user) {
        setAuthedUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setAuthedUser(null);
      }

      debugRedirectResult();
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
    signInWithRedirect(auth, googleProvider);
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
