import styles from "./styles.module.css";

const SettingsInputs = () => {
  return (
    <form className={styles.container}>
      <label htmlFor="text">Name</label>
      <input id="text" type="text" name="firstName" value="Robby" />
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" value="vince@gmail.com" />
    </form>
  );
};

export default SettingsInputs;
