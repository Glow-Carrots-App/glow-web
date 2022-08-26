import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const DeleteAccount = () => {
  const {
    deleteAccount,
    authedUser: { uid },
  } = useAuth();
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await deleteAccount();
      await UserModel.deleteUser(uid);
      await FoodEntryModel.deleteUserHistory(uid);
      router.push("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to delete your account?</Heading2>
      <div className={styles.buttonPair}>
        <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
        <a className={styles.smallButton} onClick={handleDelete}>
          Delete Account
        </a>
      </div>
    </div>
  );
};

export default DeleteAccount;
