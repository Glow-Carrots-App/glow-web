import Heading1 from "../../../components/Heading1";
import ChangePasswordForm from "../../../components/ChangePasswordForm";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const PasswordPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Change Password</Heading1>
      <ChangePasswordForm />
      <BottomTabs />
    </div>
  );
};

export default PasswordPage;
