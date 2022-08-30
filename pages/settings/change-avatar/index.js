import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
import BottomTabs from "../../../components/BottomTabs/index";
import withProtected from "../../../routers/withProtected";

const ChangeAvatar = () => {
  return (
    <PageContainer>
      <Heading1>Change Your Avatar</Heading1>
      <AvatarList />
      <BottomTabs />
    </PageContainer>
  );
};

export default withProtected(ChangeAvatar);
