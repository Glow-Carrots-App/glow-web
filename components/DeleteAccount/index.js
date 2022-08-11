import Heading2 from "../Heading2";
import styles from "./styles.module.css";

const DeleteAccount = () => {
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to delete your account?</Heading2>
      <div className={styles.buttonContainer}>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
