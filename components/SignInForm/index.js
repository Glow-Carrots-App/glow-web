import Link from "next/link";

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
      <Link href="/today">
        <a>
          <input
            type="submit"
            value="Sign In"
            className={styles.signInButton}
          />
        </a>
      </Link>
      <input
        type="submit"
        value="Sign In With Google"
        className={styles.signInButton}
      />
    </form>
  );
};

export default SignInForm;
