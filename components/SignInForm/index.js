import { useState } from "react";

import { useAuth } from "../../context/AuthContext.js";

import styles from "./styles.module.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleLogin } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log("trying login");
      await login(email, password);
    } catch (error) {
      console.log("handle sign in");
      setError("Invalid email or password.");
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log("trying google");
      await googleLogin();
    } catch (error) {
      console.log("handle google sign in");
      setError("Error. Try again.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSignIn} role="form">
      <input
        type="email"
        autoComplete="email"
        placeholder="Email"
        value={email}
        className={styles.signInFields}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        className={styles.signInFields}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <p className={styles.error} role="error">
          {error}
        </p>
      )}
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
