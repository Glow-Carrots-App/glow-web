import Link from "next/link";

import Heading1 from "../../components/Heading1";
import CreateAccountForm from "../../components/CreateAccountForm";

import styles from "./styles.module.css";

const CreateAccountPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Create Account</Heading1>
      <CreateAccountForm />
      <p className={styles.signinText}>
        Already have an account?
        <Link href="/sign-in">
          <a> Sign In</a>
        </Link>
      </p>
    </div>
  );
};

export default CreateAccountPage;
