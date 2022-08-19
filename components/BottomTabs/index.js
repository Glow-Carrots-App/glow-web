import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const BottomTabs = ({ isToday = false, isEat = false, isProfile = false }) => {
  return (
    <div className={styles.container}>
      <Link href="/today">
        <a className={styles.sideIcon}>
          <FontAwesomeIcon
            icon={faSun}
            size="2x"
            color={isToday ? "#907ac4" : "#cac4d8"}
          />
        </a>
      </Link>
      <Link href="/eat">
        <a>
          <FontAwesomeIcon
            icon={faPlus}
            size="3x"
            color={isEat ? "#ffdb4b" : "#cac4d8"}
          />
        </a>
      </Link>
      <Link href="/profile">
        <a className={styles.sideIcon}>
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            color={isProfile ? "#907ac4" : "#cac4d8"}
          />
        </a>
      </Link>
    </div>
  );
};

export default BottomTabs;
