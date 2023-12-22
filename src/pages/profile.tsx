import styled from "styled-components";
import PageContainer from "@/components/global/globalContainer";
import GlobalStyle from "@/components/global/globalMargin";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileInfo = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileName = styled.h2`
    margin: 0.5rem 0;
`;

const ProfileDescription = styled.p`
    color: grey;
    text-align: center;
`;

function ProfilePage() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>프로필 페이지</h1>

        <Wrapper>
          <ProfileInfo>
            <ProfileImage src="/path/to/profile-image.jpg" alt="Profile Image" />
            <ProfileName>이름</ProfileName>
            <ProfileDescription>간단한 자기소개</ProfileDescription>
          </ProfileInfo>
        </Wrapper>
      </PageContainer>
    </>
  );
}

export default ProfilePage;
