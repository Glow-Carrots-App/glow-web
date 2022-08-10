import Heading1 from "../../components/Heading1/index";
import CreateAccountForm from "../../components/CreateAccountForm/index";

import styles from "./styles.module.css";

const CreateAccount = () => {
  return (
    <div className={styles.container}>
      <Heading1>Create Account</Heading1>
      <CreateAccountForm />
      <p className={styles.signinText}>
        Already have an account? <a>Sign in</a>
      </p>
    </div>
  );
};

export default CreateAccount;
