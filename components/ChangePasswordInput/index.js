import {
  validatePasswordRegex,
  validatePasswordMsg,
} from "../../utils/validatePassword";

import styles from "./styles.module.css";

const ChangePasswordInput = ({
  password,
  setPassword,
  setIsPasswordSaved,
  placeholder,
}) => {
  return (
    <input
      className={styles.inputField}
      role="password"
      type="password"
      value={password}
      placeholder={placeholder}
      autoComplete="new-password"
      pattern={validatePasswordRegex}
      onFocus={() => setIsPasswordSaved(false)}
      onChange={(e) => {
        e.target.setCustomValidity("");
        setPassword(e.target.value);
      }}
      onInvalid={(e) => e.target.setCustomValidity(validatePasswordMsg)}
    />
  );
};

export default ChangePasswordInput;
