import { useState } from "react";

import { useAuth } from "../../context/AuthContext.js";
import UserModel from "../../model/user";

import styles from "./styles.module.css";
import createNewUserDataModel from "../../utils/createNewUserDataModel.js";

const CreateAccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const { signup } = useAuth();

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signup(email, password);
      const newUser = createNewUserDataModel(email, firstName, user.uid);
      await UserModel.createUser(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} method="post" onSubmit={handleCreateAccount}>
      <input
        className={styles.formInput}
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.formInput}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <input type="submit" value="Sign Up" className={styles.inputButton} />
    </form>
  );
};

export default CreateAccountForm;
