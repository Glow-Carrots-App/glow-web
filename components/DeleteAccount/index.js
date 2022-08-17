import { useRouter } from "next/router";

import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";
import { useAuth } from "../../context/AuthContext";

import styles from "./styles.module.css";

const DeleteAccount = () => {
  const { deleteAccount } = useAuth();
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await deleteAccount();
      router.push("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to delete your account?</Heading2>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <a className={styles.smallButton} onClick={handleDelete}>
          Delete Account
        </a>
      </div>
    </div>
  );
};

export default DeleteAccount;
