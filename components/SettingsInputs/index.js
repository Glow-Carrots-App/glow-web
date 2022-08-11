import styles from "./styles.module.css";

const SettingsInputs = () => {
  return (
    <form>
      <input type="text" name="firstName" />
      <input type="text" name="email" />
      <input type="password" name="password" />
    </form>
  );
};

export default SettingsInputs;
