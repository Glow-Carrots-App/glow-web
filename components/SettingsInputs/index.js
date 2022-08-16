import styles from "./styles.module.css";

const SettingsInputs = () => {
  return (
    <form className={styles.container}>
      <label htmlFor="text">Name</label>
      <input id="text" type="text" name="firstName" />
      <label htmlaFor="email">Email</label>
      <input id="email" type="text" name="email" />
    </form>
  );
};

export default SettingsInputs;
