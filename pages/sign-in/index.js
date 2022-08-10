import Heading1 from "../../components/Heading1";
import styles from "./styles.module.css";
import SignInForm from "../../components/SignInForm/index";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <Heading1>GLOW</Heading1>
      <SignInForm></SignInForm>
      <p>Don't have an account? Sign Up</p>
    </div>
  );
};

export default SignIn;
