import styles from "./styles.module.css";

const CreateAccountForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="password" placeholder="Password" />
      <input
        type="text"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default CreateAccountForm;
