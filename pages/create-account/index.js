import Link from "next/link";

import PageContainer from "../../components/PageContainer";
import CreateAccountForm from "../../components/CreateAccountForm";
import withUnprotected from "../../routers/withUnprotected";

import styles from "./styles.module.css";

const CreateAccountPage = () => {
  return (
    <PageContainer isLanding={true}>
      <div className={styles.container}>
        <div>
          <img
            className={styles.groceryBag}
            src="/landing/grocery-bag-signup.png"
          />
        </div>
        <div>
          <div className={styles.heading}>
            <h1 className={styles.heading1}>Create Account</h1>
            <img src="/stats/goldenCarrot.png" className={styles.carrot} />
          </div>
          <CreateAccountForm />
          <p className={styles.signinText}>
            Already have an account?
            <Link href="/sign-in">
              <a className={styles.signInLink}> Sign In</a>
            </Link>
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default withUnprotected(CreateAccountPage);
