import Link from "next/link";

import styles from "./styles.module.css";

const AddButton = () => {
  return (
    <div className={styles.buttonContainer} role="container">
      <Link href="/eat">
        <a>
          <img src="/buttonIcons/add.png" className={styles.button} />
        </a>
      </Link>
    </div>
  );
};

export default AddButton;
