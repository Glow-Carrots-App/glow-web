import Link from "next/link";

import styles from "./styles.module.css";

const DoneButton = ({ href, top, right }) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.doneLink}>
          <img src="/buttonIcons/back.png" />
        </a>
      </Link>
    </>
  );
};

export default DoneButton;
