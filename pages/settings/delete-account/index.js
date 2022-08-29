import PageContainer from "../../../components/PageContainer/index.js";
import Heading1 from "../../../components/Heading1/index.js";
import DeleteAccount from "../../../components/DeleteAccount";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

import styles from "./styles.module.css";

const DeleteAccountPage = () => {
  return (
    <WithProtected>
      <PageContainer>
        <Heading1>Delete Account</Heading1>
        <DeleteAccount />
        <img src="/pageBackgrounds/avocado.png" className={styles.avocado1} />
        <img src="/pageBackgrounds/avocado.png" className={styles.avocado2} />
        <BottomTabs />
      </PageContainer>
    </WithProtected>
  );
};

export default DeleteAccountPage;
