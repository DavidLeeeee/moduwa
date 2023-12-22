import styled from "styled-components";
import PageContainer from "@/components/global/globalContainer";
import GlobalStyle from "@/components/global/globalMargin";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

function LoginPage() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>홈 페이지</h1>

        <Wrapper>
          
        </Wrapper>
      </PageContainer>
    </>
  );
}

export default LoginPage;