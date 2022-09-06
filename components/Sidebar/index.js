import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faPlus,
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

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
            <a style={{ color: page === "today" && "#ffdb4b" }}>
              <FontAwesomeIcon
                className={styles.fontAwesomeSide}
                icon={faSun}
                size="med"
              />
              <span>Today</span>
            </a>
          </Link>
          <Link href="/eat">
            <a style={{ color: page === "eat" && "#ffdb4b" }}>
              <FontAwesomeIcon
                className={styles.fontAwesomeSide}
                icon={faPlus}
                size="med"
              />
              <span>Eat</span>
            </a>
          </Link>
          <Link href="/profile">
            <a style={{ color: page === "profile" && "#ffdb4b" }}>
              <FontAwesomeIcon
                className={styles.fontAwesomeSide}
                icon={faUser}
                size="med"
              />
              <span>Profile</span>
            </a>
          </Link>
          <Link href="/settings">
            <a style={{ color: page === "settings" && "#ffdb4b" }}>
              <FontAwesomeIcon
                className={styles.fontAwesomeSide}
                icon={faGear}
                size="med"
              />
              <span>Settings</span>
            </a>
          </Link>
        </div>
        <img src="/pageBackgrounds/lettuce.png" />
        <div className={styles.bottomLink}>
          <Link href="/settings/logout">
            <a style={{ color: page === "logout" && "#ffdb4b" }}>
              <FontAwesomeIcon
                className={styles.fontAwesomeSide}
                icon={faRightFromBracket}
                size="med"
              />
              <span>Logout</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
