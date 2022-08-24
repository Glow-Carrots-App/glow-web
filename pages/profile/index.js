import { useAuth } from "../../context/AuthContext";
import Heading1 from "../../components/Heading1";
import UserInfo from "../../components/UserInfo";
import Statistics from "../../components/Statistics";
import ColorBreakdown from "../../components/ColorBreakdown";
import BottomTabs from "../../components/BottomTabs";
import WithProtected from "../../components/WithProtected";

import styles from "./styles.module.css";

const ProfilePage = () => {
  const {
    authedUser: { uid },
  } = useAuth();
  return (
    <WithProtected>
      <div className={styles.container}>
        <Heading1>Profile</Heading1>
        <UserInfo uid={uid} />
        <Statistics uid={uid} />
       <ColorBreakdown uid={uid} />
       <BottomTabs isProfile={true} />
      </div>
    </WithProtected>
  );
};

export default ProfilePage;
