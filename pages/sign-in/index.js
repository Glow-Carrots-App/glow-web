import Link from "next/link";

import Heading1 from "../../components/Heading1";
import SignInForm from "../../components/SignInForm";

import styles from "./styles.module.css";

const SignIn = () => {
  return (
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
  );
};

export default SignIn;
