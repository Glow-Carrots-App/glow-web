import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext.js";

import styles from "./styles.module.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { login, googleLogin } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/today");
    } catch (error) {
      console.log("Login failed", error);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      router.push("/today");
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSignIn}>
      <input
        type="text"
        className={styles.signInFields}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className={styles.signInFields}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Sign In" className={styles.signInButton} />

      <input
        type="button"
        value="Sign In With Google"
        className={styles.signInButton}
        onClick={handleGoogleSignIn}
      />
    </form>
  );
};

export default SignInForm;
