import PageContainer from "../../../components/PageContainer";
import FeedbackForm from "../../../components/FeedbackForm";
import Heading1 from "../../../components/Heading1";
import BottomTabs from "../../../components/BottomTabs";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";

import styles from "./styles.module.css";

const FeedbackPage = ({ user }) => {
  return (
    <PageContainer>
      <Sidebar />
      <img
        role="image"
        src="/pageBackgrounds/artichoke.png"
        className={styles.artichoke}
      />
      <Heading1>Feedback</Heading1>
      <FeedbackForm user={user} />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(FeedbackPage);
