import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1";
import DeleteAccount from "../../../components/DeleteAccount";
import BottomTabs from "../../../components/BottomTabs";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";

import styles from "./styles.module.css";

const DeleteAccountPage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <Heading1>Delete Account</Heading1>
      <DeleteAccount />
      <img src="/pageBackgrounds/avocado.png" className={styles.avocado1} />
      <img src="/pageBackgrounds/avocado.png" className={styles.avocado2} />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(DeleteAccountPage);
