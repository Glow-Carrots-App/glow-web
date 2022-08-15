import { deleteUser } from "firebase/auth";
import { useRouter } from "next/router";

import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";
import { auth } from "../../firebase";

import styles from "./styles.module.css";

const DeleteAccount = () => {
  const router = useRouter();
  console.log(auth);
  const handleDelete = (e) => {
    deleteUser(auth)
      .then(() => {
        console.log("DELETE SUCCESS");
        router.push("/sign-in");
      })
      .catch((error) => {
        e.preventDefault();
        console.log("DELETE FAILED", error.message);
      });
  };
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to delete your account?</Heading2>
      <div className={styles.buttonContainer}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <a className={styles.smallButton} onClick={(e) => handleDelete(e)}>
          Delete Account
        </a>
      </div>
    </div>
  );
};

export default DeleteAccount;
