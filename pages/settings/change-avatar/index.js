import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
import BottomTabs from "../../../components/BottomTabs/index";
import withProtected from "../../../routers/withProtected";
import Sidebar from "../../../components/Sidebar";

const ChangeAvatar = () => {
  return (
    <PageContainer>
      <Sidebar />
      <Heading1>Change Your Avatar</Heading1>
      <AvatarList />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(ChangeAvatar);
