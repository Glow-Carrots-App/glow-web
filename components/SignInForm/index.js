import styles from "./styles.module.css";

const SignInForm = () => {
  return (
    <form className={styles.container} action="today" method="post">
      <input type="text" className={styles.signInFields} placeholder="Email" />
      <input
        type="password"
        className={styles.signInFields}
        placeholder="Password"
      />
      <input type="submit" value="Sign In" className={styles.signInButton} />

      <input
        type="button"
        value="Sign In With Google"
        className={styles.signInButton}
      />
    </form>
  );
};

export default SignInForm;
