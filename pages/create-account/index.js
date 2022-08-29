import Link from "next/link";

import Heading1 from "../../components/Heading1";
import CreateAccountForm from "../../components/CreateAccountForm";
import Loading from "../../components/Loading";
import WithUnprotected from "../../components/WithUnprotected";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const CreateAccountPage = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <WithUnprotected>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading1>Create Account</Heading1>
          <img src="/stats/goldenCarrot.png" className={styles.image} />
        </div>
        <CreateAccountForm />
        <p className={styles.signinText}>
          Already have an account?
          <Link href="/sign-in">
            <a className={styles.signInLink}> Sign In</a>
          </Link>
        </p>
      </div>
    </WithUnprotected>
  );
};

export default CreateAccountPage;
