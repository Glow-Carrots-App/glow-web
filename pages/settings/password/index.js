import Heading1 from "../../../components/Heading1";
import ChangePasswordForm from "../../../components/ChangePasswordForm";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const PasswordPage = () => {
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Change Password</Heading1>
        <ChangePasswordForm />
        <img
          src="/pageBackgrounds/passion-fruit.png"
          className={styles.fruit}
        />
        <BottomTabs />
      </div>
    </WithProtected>
  );
};

export default PasswordPage;
