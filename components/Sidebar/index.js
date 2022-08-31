import Link from "next/link";

import styles from "./styles.module.css";

const Sidebar = ({ page = "" }) => {
  return (
    <div className={styles.container}>
      <p>
        GLOW <img className={styles.logo} src="/favicon.ico" />
      </p>
      <div className={styles.linksContainer}>
        <div className={styles.topLinks}>
          <Link href="/today">
            <a style={{ color: page === "today" && "#ffdb4b" }}>Today</a>
          </Link>
          <Link href="/eat">
            <a style={{ color: page === "eat" && "#ffdb4b" }}>Eat</a>
          </Link>
          <Link href="/profile">
            <a style={{ color: page === "profile" && "#ffdb4b" }}>Profile</a>
          </Link>
          <Link href="/settings">
            <a style={{ color: page === "settings" && "#ffdb4b" }}>Settings</a>
          </Link>
        </div>
        <div className={styles.bottomLink}>
          <Link href="/settings/logout">
            <a style={{ color: page === "logout" && "#ffdb4b" }}>Logout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
