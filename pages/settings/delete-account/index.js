import Heading1 from "../../../components/Heading1/index.js";
import DeleteAccount from "../../../components/DeleteAccount";
import BottomTabs from "../../../components/BottomTabs/index";

import styles from "./styles.module.css";

const DeleteAccountPage = () => {
  return (
    <div className={styles.container}>
      <Heading1>Delete Account</Heading1>
      <DeleteAccount />
      <img src="/pageBackgrounds/avocado.png" className={styles.avocado} />
      <BottomTabs />
    </div>
  );
};

export default DeleteAccountPage;
