import {
  validatePasswordRegex,
  validatePasswordMsg,
} from "../../utils/validatePassword";

import styles from "./styles.module.css";

const CreateAccountPasswordInput = ({ password, setPassword, placeholder }) => {
  return (
    <input
      className={styles.inputField}
      type="password"
      value={password}
      placeholder={placeholder}
      autoComplete="new-password"
      pattern={validatePasswordRegex}
      onChange={(e) => {
        e.target.setCustomValidity("");
        setPassword(e.target.value);
      }}
      onInvalid={(e) => {
        e.target.setCustomValidity(validatePasswordMsg);
        setPassword("");
      }}
    />
  );
};

export default CreateAccountPasswordInput;
