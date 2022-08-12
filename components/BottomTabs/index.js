import Link from "next/link";

import styles from "./styles.module.css";

const BottomTabs = () => {
  return (
    <div className={styles.container}>
      <Link href="/today">
        <a>Today</a>
      </Link>
      <Link href="/eat">
        <a>Add</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </div>
  );
};

export default BottomTabs;
