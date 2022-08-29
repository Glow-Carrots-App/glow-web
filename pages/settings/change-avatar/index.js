import PageContainer from "../../../components/PageContainer";
import Heading1 from "../../../components/Heading1/index";
import AvatarList from "../../../components/AvatarList";
import BottomTabs from "../../../components/BottomTabs/index";
import WithProtected from "../../../components/WithProtected";

const ChangeAvatar = () => {
  return (
    <WithProtected>
      <PageContainer>
        <Heading1>Change Your Avatar</Heading1>
        <AvatarList />
        <BottomTabs />
      </PageContainer>
    </WithProtected>
  );
};

export default ChangeAvatar;
