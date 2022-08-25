import styles from "./styles.module.css";

const SettingsInputs = ({ user }) => {
  const { firstName, email } = user;

  return (
    <form className={styles.container}>
      <label htmlFor="text">Name</label>
      <input
        className={styles.settingsInput}
        id="text"
        type="text"
        name="firstName"
        value={firstName}
      />
      <label htmlFor="email">Email</label>
      <input
        className={styles.settingsInput}
        id="email"
        type="text"
        name="email"
        value={email}
      />
    </form>
  );
};

export default SettingsInputs;
