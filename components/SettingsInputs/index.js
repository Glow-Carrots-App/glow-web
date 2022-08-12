import styles from "./styles.module.css";

const SettingsInputs = () => {
  return (
    <form className={styles.container}>
      <label for="text">Name</label>
      <input id="text" type="text" name="firstName" />
      <label for="email">Email</label>
      <input id="email" type="text" name="email" />
      <label for="password">Password</label>
      <input id="password" type="password" name="password" />
    </form>
  );
};

export default SettingsInputs;
