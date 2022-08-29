import Link from "next/link";

import Heading1 from "../../components/Heading1";
import SignInForm from "../../components/SignInForm";
import Loading from "../../components/Loading";
import WithUnprotected from "../../components/WithUnprotected";
import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";
import createNewUserDataModel from "../../utils/createNewUserDataModel";

import styles from "./styles.module.css";
import { useEffect } from "react";

const SignIn = () => {
  const { authedUser, loading, getGoogleRedirectResult } = useAuth();

  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const result = await getGoogleRedirectResult();
        if (result?.isNewUser) {
          const { email, uid } = authedUser;
          const newUser = createNewUserDataModel(email, result.firstName, uid);
          await UserModel.createUser(newUser);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (authedUser) {
      fetchGoogleData();
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <WithUnprotected>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading1>GLOW</Heading1>
          <img src="/stats/goldenCarrot.png" className={styles.image} />
        </div>
        <SignInForm />
        <p className={styles.signInText}>
          Don't have an account?
          <Link href="/create-account">
            <a className={styles.signUpLink}> Sign Up</a>
          </Link>
        </p>
      </div>
    </WithUnprotected>
  );
};

export default SignIn;
