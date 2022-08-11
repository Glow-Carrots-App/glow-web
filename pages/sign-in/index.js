import Heading1 from "../../components/Heading1";
import SignInForm from "../../components/SignInForm";
import styles from "./styles.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <Heading1>GLOW</Heading1>
      <SignInForm></SignInForm>
      <p className={styles.signInText}>Don't have an account? Sign Up</p>
    </div>
  );
};

export default SignIn;
