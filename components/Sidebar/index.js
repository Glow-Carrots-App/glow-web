import Link from "next/link";

import styles from "./styles.module.css";

const Sidebar = ({ page }) => {
  return (
    <div className={styles.container}>
      <p>
        GLOW <img className={styles.logo} src="/favicon.ico" />
      </p>
      <div className={styles.linksContainer}>
        <div className={styles.topLinks}>
          <Link href="/today">
            <a style={{ color: page === "today" && "black" }}>Today</a>
          </Link>
          <Link href="/eat">
            <a style={{ color: page === "eat" && "black" }}>Eat</a>
          </Link>
          <Link href="/profile">
            <a style={{ color: page === "profile" && "black" }}>Profile</a>
          </Link>
          <Link href="/settings">
            <a style={{ color: page === "settings" && "black" }}>Settings</a>
          </Link>
        </div>
        <div className={styles.bottomLink}>
          <Link href="/settings/logout">
            <a style={{ color: page === "logout" && "black" }}>Logout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
