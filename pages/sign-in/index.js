import Link from "next/link";

import PageContainer from "../../components/PageContainer";
import SignInForm from "../../components/SignInForm";
import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";
import createNewUserDataModel from "../../utils/createNewUserDataModel";
import withUnprotected from "../../routers/withUnprotected";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const SignIn = ({ authedUser }) => {
  const [hasError, setHasError] = useState(false);
  const { getGoogleRedirectResult } = useAuth();

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
        setHasError(true);
      }
    };
    if (authedUser) {
      fetchGoogleData();
    }
  }, []);

  if (hasError) {
    return (
      <PageContainer isLanding={true}>
        <p className={styles.error}>
          Something went wrong. Please refresh the page.
        </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer isLanding={true}>
      <div className={styles.container}>
        <div>
          <img
            className={styles.groceryBag}
            src="/landing/grocery-bag-signin.png"
          />
        </div>
        <div>
          <div className={styles.heading}>
            <h1 className={styles.heading1}>GLOW</h1>
            <img src="/stats/goldenCarrot.png" className={styles.carrot} />
          </div>
          <SignInForm />
          <p className={styles.signInText}>
            Don&apos;t have an account?
            <Link href="/create-account">
              <a className={styles.signUpLink}> Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default withUnprotected(SignIn);
