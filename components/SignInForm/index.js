import Heading1 from "../Heading1";
import styles from "./styles.module.css";

const SignInForm = () => {
  return (
    <form className={styles.container}>
      <input type="text" className={styles.signInFields} placeholder="Email" />
      <input
        type="password"
        className={styles.signInFields}
        placeholder="Password"
      />
      <input type="submit" value="Sign In" className={styles.signInButton} />
      <input
        type="submit"
        value="Sign In With Google"
        className={styles.signInButton}
      />
    </form>
  );
};

export default SignInForm;
