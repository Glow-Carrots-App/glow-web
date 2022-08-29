import Link from "next/link";

import styles from "./styles.module.css";

const DoneButton = ({ href }) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.doneLink}>Done</a>
      </Link>
    </>
  );
};

export default DoneButton;
