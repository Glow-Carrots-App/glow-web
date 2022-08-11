import styles from "./styles.module.css";

const CreateAccountForm = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.formInput}
        type="text"
        name="firstName"
        placeholder="First Name"
      />
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Password"
      />
      <input
        className={styles.formInput}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <input type="submit" value="Sign Up" className={styles.inputButton} />
    </form>
  );
};

export default CreateAccountForm;
