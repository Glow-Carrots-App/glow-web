import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import UserModel from "../../model/user";
import FoodEntryModel from "../../model/foodEntry";
import Heading2 from "../Heading2";
import SmallLinkedButton from "../SmallLinkedButton";

import styles from "./styles.module.css";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const {
    deleteAccount,
    authedUser: { uid },
    reauthenticate,
  } = useAuth();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await reauthenticate(password);
      await deleteAccount();
      await UserModel.deleteUser(uid);
      await FoodEntryModel.deleteUserHistory(uid);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Heading2>We're sad to see you go!</Heading2>
      <form onSubmit={handleDelete} className={styles.deleteAccountForm}>
        <label className={styles.deleteAccountText} htmlFor="password">
          Confirm password to delete account:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.passwordField}
          required
        />
        <div className={styles.buttonPair}>
          <SmallLinkedButton href="/settings">Cancel</SmallLinkedButton>
          <input
            type="submit"
            className={styles.smallButton}
            value="Delete Account"
            disabled={!password}
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteAccount;
