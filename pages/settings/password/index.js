import Heading1 from "../../../components/Heading1";
import ChangePasswordForm from "../../../components/ChangePasswordForm";
import BottomTabs from "../../../components/BottomTabs";
import withProtected from "../../../routers/withProtected";

import styles from "./styles.module.css";

const PasswordPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Change Password</Heading1>
      <ChangePasswordForm />
      <img src="/pageBackgrounds/passion-fruit.png" className={styles.fruit} />
      <BottomTabs />
    </div>
  );
};

export default withProtected(PasswordPage);
