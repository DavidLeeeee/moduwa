import React, { ReactNode } from "react";
import styled from "styled-components";

// Styled-components를 사용한 스타일링
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #dbdbdb;
  @media (max-width: 768px) {
    height: 58px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(230, 230, 230);
`;

const Logined = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240);
`;

interface HeaderProps {
  currentPage: string; // 현재 페이지 경로를 받는 프로퍼티 추가
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <HeaderContainer>
      {/* Header의 내용 */}
      <LeftContent>
        {currentPage === "/" ? (
          <span>Homepage</span>
        ) : currentPage === "/feed" ? (
          <span>모두소식</span>
        ) : currentPage === "/chat" ? (
          <span>모두톡</span>
        ) : currentPage === "/profile" ? (
          <span>프로필</span>
        ) : (
          <span>다른 페이지</span>
        )}
      </LeftContent>
      <Logined>
        <span>이 부분의 기능은 추후 UI완료 이후에 넣겠습니다.</span>
      </Logined>
      {/* Header의 나머지 내용 */}
    </HeaderContainer>
  );
};

export default Header;
