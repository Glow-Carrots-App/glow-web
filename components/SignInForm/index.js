import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext.js";
import {
  validatePasswordRegex,
  validatePasswordMsg,
} from "../../utils/validatePassword.js";

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
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSignIn}>
      <input
        type="email"
        autoComplete="email"
        placeholder="Email"
        value={email}
        required
        className={styles.signInFields}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        pattern={validatePasswordRegex}
        required
        className={styles.signInFields}
        onInput={(e) => e.target.setCustomValidity(validatePasswordMsg)}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value="Sign In"
        className={styles.signInButton}
        disabled={!email || !password}
      />
      <button className={styles.signInButton} onClick={handleGoogleSignIn}>
        Sign In With Google
      </button>
    </form>
  );
};

export default SignInForm;
