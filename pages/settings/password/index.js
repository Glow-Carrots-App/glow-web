import Heading1 from "../../../components/Heading1";
import ChangePasswordForm from "../../../components/ChangePasswordForm";
import styles from "./styles.module.css";

const PasswordPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Change Password</Heading1>
      <ChangePasswordForm></ChangePasswordForm>
    </div>
  );
};

export default PasswordPage;
