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
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase";
import Loading from "../components/Loading";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

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

  const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    await signInWithRedirect(auth, googleProvider);
  };

  const getGoogleRedirectResult = async () => {
    const result = await getRedirectResult(auth);
    if (result) {
      const {
        isNewUser,
        profile: { given_name },
      } = getAdditionalUserInfo(result);
      const formattedResult = {
        isNewUser,
        firstName: given_name,
      };
      return formattedResult;
    }
    return null;
  };

  const logout = async () => {
    setAuthedUser(null);
    await signOut(auth);
  };

  const reauthenticate = async (password) => {
    const user = auth.currentUser;
    const { email } = user;
    const credential = EmailAuthProvider.credential(email, password);

    await reauthenticateWithCredential(user, credential);
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

  if (loading) {
    console.log("in authcontext loading");
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        authedUser,
        login,
        signup,
        logout,
        deleteAccount,
        changePassword,
        changeEmail,
        googleLogin,
        getGoogleRedirectResult,
        reauthenticate,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
