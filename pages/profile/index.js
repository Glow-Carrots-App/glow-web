import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";

import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <Link href="/settings">
        <a className={styles.settingsBtn}>
          <FontAwesomeIcon icon={faGear} size="xl" color="#9084ab" />
        </a>
      </Link>
      <Heading1>Profile</Heading1>
      <UserInfo />
      <Statistics />
      <ColorBreakdown />
      <BottomTabs />
    </div>
  );
};

export default ProfilePage;
