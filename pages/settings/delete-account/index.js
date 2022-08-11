import Heading1 from "../../../components/Heading1/index.js";
import DeleteAccount from "../../../components/DeleteAccount";
import styles from "./styles.module.css";

const DeleteAccountPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Delete Account</Heading1>
      <DeleteAccount />
    </div>
  );
};

export default DeleteAccountPage;
