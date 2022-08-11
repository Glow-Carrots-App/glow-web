import Link from "next/link";

import Heading2 from "../Heading2";

import styles from "./styles.module.css";

const LogOut = () => {
  return (
    <div className={styles.container}>
      <Heading2>Are you sure you want to log out?</Heading2>
      <div className={styles.buttonContainer}>
        <Link href="/settings">
          <a>
            <button>Cancel</button>
          </a>
        </Link>
        <Link href="/sign-in">
          <a>
            <button>Logout</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LogOut;
