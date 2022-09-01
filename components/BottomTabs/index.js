import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const BottomTabs = ({ isToday = false, isEat = false, isProfile = false }) => {
  return (
    <div className={styles.container}>
      <Link href="/today">
        <a>
          <FontAwesomeIcon
            className={styles.fontAwesomeSide}
            icon={faSun}
            size="2x"
            color={isToday ? "#ffdb4b" : "#cac4d8"}
          />
        </a>
      </Link>
      <Link href="/eat">
        <a>
          <FontAwesomeIcon
            className={styles.fontAwesomeCenter}
            icon={faPlus}
            size="3x"
            color={isEat ? "#ffdb4b" : "#cac4d8"}
          />
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <FontAwesomeIcon
            className={styles.fontAwesomeSide}
            icon={faUser}
            size="2x"
            color={isProfile ? "#ffdb4b" : "#cac4d8"}
          />
        </a>
      </Link>
    </div>
  );
};

export default BottomTabs;
