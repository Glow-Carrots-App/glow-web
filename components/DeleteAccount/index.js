import Link from "next/link";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const DeleteAccount = () => {
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to delete your account?</Heading2>
      <div className={styles.buttonContainer}>
        <Link href="/settings">
          <a>
            <button>Cancel</button>
          </a>
        </Link>
        <Link href="/sign-in">
          <a>
            <button>Delete</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DeleteAccount;
